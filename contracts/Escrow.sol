pragma solidity 0.4.24;

import "./Ownable.sol";
import "./SafeMath.sol";

/*
 * @title Escrow
 * @dev A standalone escrow contract that holds the long and short margins
 */

contract Escrow is Ownable {
  using SafeMath for uint256;
  mapping(address => uint256) public escrowBalance;

  /*
   * @dev Returns deposit amount of an address
   * @param _payee the payee address
   */
  function depositsOf(address _payee) public view returns (uint256) {
    return escrowBalance[_payee];
  }

  /*
   * @dev Deposit amount into escrow
   * @param _payer the payer address
   * @param _amount the amount deposited
   */
  function deposit(address _payer, uint256 _amount) public payable onlyOwner {
    escrowBalance[_payer] = escrowBalance[_payer].add(_amount);
  }

  /*
   * @dev Withdraw amount from escrow
   */
  function withdraw(address _payer, address  _payee, uint256 _amount) public onlyOwner returns (bool) {
    require(_amount <= escrowBalance[_payer], "Insufficient funds");
    _payee.transfer(_amount);
    escrowBalance[_payer] = escrowBalance[_payer].sub(_amount);
  }

}