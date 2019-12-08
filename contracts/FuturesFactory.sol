pragma solidity 0.4.24;

import "./SafeMath.sol";
import "./Ownable.sol";
import "./Escrow.sol";
import "./interfaces/IOracle.sol";

/*
 * @title FuturesFactory
 * @dev Contract that manges futures trading - long/short position and square off
 */
contract FuturesFactory is Ownable {
  using SafeMath for uint256;
  using SafeMath for int256;
  address private escrowAddress;
  uint256 private futureId;
  uint256 private orderId;
  address private deployedOracleAddress;
  uint256 private positionAmount;
  uint256 public TEMPERATURE_THRESHOLD;
  
  enum Position { LONG, SHORT }
  
  struct future {
    address long;
    address short;
    uint256 qty;
    uint256 price;
    uint256 expiry;
  }
  
  struct order {
    address trader;
    Position position;
    uint256 qty;
    uint256 price;
    uint256 expiry;
    bool isFilled;
  }

  event idEvent(uint256);

  mapping(uint256 => future) futuresList; // futureId => future
  mapping(uint256 => order) ordersList; // orderId => order

  /*
   * @dev Initializes oracle, escrow and positionAmount
   * @param _oracleAddress address of honeycomb chainlink oracle
   */
  constructor(address _oracleAddress) public {
    deployedOracleAddress = _oracleAddress;
    escrowAddress = address(new Escrow());
    futureId = 1;
    orderId = 1;
    TEMPERATURE_THRESHOLD = 18;
  }
  
  function submitOrder(
    Position _position,
    uint256 _qty,
    uint256 _price,
    uint256 _expiry
  ) public payable {
    require(_qty.mul(_price) == msg.value, "Amount paid is incorrect");
    positionAmount = uint256(msg.value);
    order memory newOrder = order(msg.sender, _position, _qty, _price, _expiry, false);
    ordersList[orderId] = newOrder;
    orderId = orderId.add(1);
  }

  /*
   * @dev Fills order - deposit margin amount of long and
   * short to escrow.
   * @param _long address of long trader
   * @param _short address of short trader
   * @param _qty qty of stocks (no. of lots * lot size)
   * @param _price price of one lot (ether)
   * @param _expiry expiry of future contract (last day of month)
   */
  function fillOrder(
    address _long,
    address _short,
    uint256 _qty,
    uint256 _price,
    uint256 _expiry
  ) public payable returns (uint256) {
    require(positionAmount == msg.value, "Insuficient position amount");
    require(_transferToEscrow(uint256(positionAmount), _long), "Failed at long _transferToEscrow");
    require(_transferToEscrow(uint256(positionAmount), _short), "Failed at short _transferToEscrow");

    future memory newFuture = future(
      _long,
      _short,
      _qty,
      _price,
      _expiry
    );

    futuresList[futureId] = newFuture;
    uint256 prevOrderId = orderId.sub(1);
    order memory tempOrder = order(
      ordersList[prevOrderId].trader,
      ordersList[prevOrderId].position,
      ordersList[prevOrderId].qty,
      ordersList[prevOrderId].price,
      ordersList[prevOrderId].expiry,
      true
    );
    ordersList[prevOrderId] = tempOrder;
    emit idEvent(futureId);
    futureId = futureId.add(1);
  }

  /*
   * @dev Square off trade - long goes short and vice versa
   * Settlement is done according to temperature indexes -
   * Heating Degree Days (HDD) and Cooling Degree Days (CDD)
   * @param _futureId id of the future contract
   */
  function squareOffOrder(uint256 _futureId) public {
    require(_canBeExercised(_futureId), "Future contract cannot be squared off");
    future memory existingFuture = futuresList[_futureId];

    uint256 avgTemp = uint256(_getAvgTemperature());
    uint256 HDD;
    uint256 CDD;
    uint256 settlementPrice;
    // Calculate HDD
    // if avgTemp < 18, HDD = 18 - avgTemp, else HDD = 0
    // if avgTemp > 18, CDD = avgTemp - 18, else CDD = 0
    // Settlement price = HDD * 0.03 ETH or CDD * 0.03 ETH
    if (avgTemp < 18) {
      HDD = TEMPERATURE_THRESHOLD.sub(avgTemp);
      settlementPrice = HDD.mul(3000000000000000);
      // Transfer (settlementPrice + positionAmount) to long, remaining to short
      _withdrawFromEscrow(positionAmount, existingFuture.long, existingFuture.long);
      _withdrawFromEscrow(settlementPrice, existingFuture.short, existingFuture.long);
      _withdrawFromEscrow(positionAmount.sub(settlementPrice), existingFuture.short, existingFuture.short);
    } else {
      CDD = avgTemp.sub(TEMPERATURE_THRESHOLD);
      settlementPrice = CDD.mul(3000000000000000);
      // Transfer (settlementPrice + positionAmount) to short, remaining to long
      _withdrawFromEscrow(positionAmount, existingFuture.short, existingFuture.short);
      _withdrawFromEscrow(settlementPrice, existingFuture.long, existingFuture.short);
      _withdrawFromEscrow(positionAmount.sub(settlementPrice), existingFuture.long, existingFuture.long);
    }
  }

  function getEscrowAddress() public view returns (address) {
    return escrowAddress;
  }

  function getLatestFutureID() public view returns (uint256) {
    return futureId;
  }
  
  function getLatestOrderID() public view returns (uint256) {
    return orderId;
  }

  function getFutureDetails(uint256 _futureId) public view returns (
    address,
    address,
    uint256,
    uint256,
    uint256
  ) {
    future memory existingFuture = futuresList[_futureId];
    return (
      existingFuture.long,
      existingFuture.short,
      existingFuture.qty,
      existingFuture.price,
      existingFuture.expiry
    );
  }
  
  function getOrderDetails(uint256 _orderId) public view returns (
    address,
    Position,
    uint256,
    uint256,
    uint256,
    bool
  ) {
    order memory existingOrder = ordersList[_orderId];
    return (
      existingOrder.trader,
      existingOrder.position,
      existingOrder.qty,
      existingOrder.price,
      existingOrder.expiry,
      existingOrder.isFilled
    );
  }

  function _canBeExercised(uint256 _futureId) internal view returns (bool) {
    require(_futureId < futureId && _futureId > 0, "Invalid future contract ID");
    future memory existingFuture = futuresList[_futureId];
    require(
      msg.sender == existingFuture.long || msg.sender == existingFuture.short,
      "Only long or short seller can exercise future"
    );
    return true;
  }

  function _getAvgTemperature() public view returns (int256) {
    require(deployedOracleAddress != address(0), "Weather oracle address not set");
    require(IOracle(deployedOracleAddress).avgTempReceived() == true, "Avg temperature not recieved yet");
    int256 avgTemp = IOracle(deployedOracleAddress).avgTemp();
    return avgTemp;
  }

  function _transferToEscrow(uint256 _amount, address _payer) internal returns (bool) {
    Escrow(escrowAddress).deposit.value(_amount)(_payer, _amount);
    return true;
  }

  function _withdrawFromEscrow(uint256 _amount, address _payer, address _payee) internal returns (bool) {
    Escrow(escrowAddress).withdraw(_payer, _payee, _amount);
    return true;
  }
}