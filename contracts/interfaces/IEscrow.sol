pragma solidity >=0.5.0 <0.6.0;

/*
 * @notice Escrow contract interface
 */
contract IEscrow {
  mapping(address => uint256) public escrowBalance;
  function depositsOf(address _payee) public view returns (uint256);
  function deposit(address _payer, uint256 _amount) public;
  function withdraw(address _payer, address _payee, uint256 _amount) public returns(bool);
}