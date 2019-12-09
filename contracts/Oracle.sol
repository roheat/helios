pragma solidity 0.4.24;

import "../node_modules/chainlink/contracts/ChainlinkClient.sol";

/*
 * @title Oracle
 * @dev This contract fetches the avg celcius temperature from
 * Honeycomb [World Weather Online and Aeris Weather APIs] -
 * an external data provider for smart contracts.
 */
contract Oracle is ChainlinkClient{
    uint256 private oraclePaymentAmount;
    bytes32 private jobId_WWO;
    bytes32 private jobId_AERIS;

    bool public avgTempReceived_WWO;
    int256 public avgTemp_WWO;

    bool public avgTempReceived_AERIS;
    int256 public avgTemp_AERIS;

    constructor(
        address _link,
        address _oracle,
        bytes32 _jobId_WWO,
        bytes32 _jobId_AERIS,
        uint256 _oraclePaymentAmount
        )
    public
    {
        setChainlinkToken(_link);
        setChainlinkOracle(_oracle);
        jobId_WWO = _jobId_WWO;
        jobId_AERIS = _jobId_AERIS;
        oraclePaymentAmount = _oraclePaymentAmount;
    }

    function makeRequestWWO() external returns (bytes32 requestId)
    {
        Chainlink.Request memory req = buildChainlinkRequest(jobId_WWO, this, this.fulfillWWO.selector);
        req.add("q", "new york");
        req.add("copyPath", "data.weather.0.avgtempC");
        requestId = sendChainlinkRequestTo(chainlinkOracleAddress(), req, oraclePaymentAmount);
    }

    function fulfillWWO(bytes32 _requestId, int256 _avgTemp)
    public
    recordChainlinkFulfillment(_requestId)
    {
        avgTempReceived_WWO = true;
        avgTemp_WWO = _avgTemp;
    }

    function makeRequestAERIS() external returns (bytes32 requestId)
    {
        Chainlink.Request memory req = buildChainlinkRequest(jobId_AERIS, this, this.fulfillAERIS.selector);
        req.add("p", "ny,ny,us");
        req.add("action", "closest");
        req.add("copyPath", "response.0.periods.0.temp.avgC");
        requestId = sendChainlinkRequestTo(chainlinkOracleAddress(), req, oraclePaymentAmount);
    }

    function fulfillAERIS(bytes32 _requestId, int256 _avgTemp)
    public
    recordChainlinkFulfillment(_requestId)
    {
        avgTempReceived_AERIS = true;
        avgTemp_AERIS = _avgTemp;
    }
}
