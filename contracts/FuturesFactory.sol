pragma solidity 0.4.24;

import "../node_modules/@openzeppelin/contracts/math/SafeMath.sol";
import "../node_modules/@openzeppelin/contracts/ownership/Ownable.sol";
import "./Escrow.sol";
import "./interfaces/IOracle.sol";

/*
 * @title FuturesFactory
 * @dev Contract that manges futures trading - long/short position and square off
 */

 contract FuturesFactory is Ownable {
  using SafeMath for uint256;
  address private escrowAddress;
  address private futureId;
  address private deployedOracleAddress;
  uint256 public PRICE_PER_LOT;

  struct future {
    address long;
    address short;
    uint265 qty;
    uint256 price;
    uint256 expiry;
  }

  event idEvent(uint256);
  
  mapping(uint256 => future) futuresList; // futureId => future

  constructor(address _oracleAddress) public {
    deployedOracleAddress = _oracleAddress;
    escrowAddress = address(new Escrow());
    futureId = 1;
    PRICE_PER_LOT = 100000000000000000; // 0.1 ETH
  }

  function fillOrder(
    address _long,
    address _short,
    uint256 _qty,
    uint256 _price,
    uint256 _expiry,
  ) public returns (uint256) {
    //TODO: instead of qty, pass amount = (qty x PRICE_PER_LOT)
    require(_transferToEscrow(_qty, _long), "Failed at long _transferToEscrow");
    require(_transferToEscrow(_qty, _short), "Failed at short _transferToEscrow");

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

  function _transferToEscrow(uint256 _amount, address _payer) internal returns (bool){
    Escrow(escrowAddress).deposit(_payer, _amount);
    return true;
  }
}