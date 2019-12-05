pragma solidity >=0.5.0 <0.6.0;

/*
 * @notice Oracle contract interface
 */
contract IOracle{
  bool public avgTempReceived;
  int256 public avgTemp;
  function makeRequest() external returns (bytes32 requestId);
  function resetResult() external;
}