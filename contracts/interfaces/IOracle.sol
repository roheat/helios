pragma solidity 0.4.24;

/*
 * @notice Oracle contract interface
 */
contract IOracle{
  bool public avgTempReceived;
  int256 public avgTemp;
  function makeRequest() external returns (bytes32 requestId);
  function resetResult() external;
}