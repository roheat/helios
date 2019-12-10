pragma solidity 0.4.24;

/*
 * @notice Oracle contract interface
 */
contract IOracle{
  bool public avgTempReceived_WWO;
  bool public avgTempReceived_AERIS;
  int256 public avgTemp_WWO;
  int256 public avgTemp_AERIS;
  function makeRequestWWO() external returns (bytes32 requestId);
  function makeRequestAERIS() external returns (bytes32 requestId);
}