pragma solidity >=0.5.0 <0.6.0;

import "../node_modules/@openzeppelin/contracts/math/SafeMath.sol";
import "../node_modules/@openzeppelin/contracts/ownership/Ownable.sol";
import "./Escrow.sol";
// import "./interfaces/IOracle.sol";

/*
 * @title FuturesFactory
 * @dev Contract that manges futures trading - long/short position and square off
 */
contract FuturesFactory is Ownable {
  using SafeMath for uint256;
  address private escrowAddress;
  uint256 private futureId;
  address private deployedOracleAddress;
  uint256 private positionAmount;

  struct future {
    address long;
    address short;
    uint256 qty;
    uint256 price;
    uint256 expiry;
  }

  event idEvent(uint256);

  mapping(uint256 => future) futuresList; // futureId => future

  constructor(address _oracleAddress) public payable {
    deployedOracleAddress = _oracleAddress;
    escrowAddress = address(new Escrow());
    futureId = 1;
    positionAmount = uint256(msg.value);
  }

  function fillOrder(
    address _long,
    address _short,
    uint256 _qty,
    uint256 _price, // 0.1 ETH
    uint256 _expiry
  ) public payable returns (uint256) {
    // uint256 amount = _price.mul(_qty);
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
    emit idEvent(futureId);
    futureId = futureId.add(1);
  }

  function squareOffOrder(uint256 _futureId) public {
    
    require(_canBeExercised(_futureId), "Future Contract cannot be squared off");
  }

  function _canBeExercised(uint256 _futureId) internal view returns (bool) {
    future memory existingFuture = futuresList[_futureId];
    require(
      msg.sender == existingFuture.long || msg.sender == existingFuture.short,
      "Only long or short seller can exercise option"
    );
    require(_futureId < futureId && _futureId > 0, "Invalid Contract ID");
    // require(now < existingFuture.expiry, "Future Contract has expired");
    return true;
  }

  function getEscrowAddress() public view returns (address) {
    return escrowAddress;
  }

  function _transferToEscrow(uint256 _amount, address _payer) internal returns (bool) {
    Escrow(escrowAddress).deposit.value(_amount)(_payer, _amount);
    return true;
  }

  function _withdrawFromEscrow(uint256 _amount, address _payer) internal returns (bool) {
    Escrow(escrowAddress).deposit.value(_amount)(_payer, _amount);
    return true;
  }
}