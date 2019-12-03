pragma solidity 0.4.24;

import "../node_modules/chainlink/contracts/ChainlinkClient.sol";

/*
 * @title Oracle
 * @dev This contract fetches the avg celcius temperature from
 * Honeycomb (World Weather Online) - an external data provider
 * for smart contracts.
 */
contract Oracle is ChainlinkClient{
    uint256 private oraclePaymentAmount;
    bytes32 private jobId;

    bool public avgTempReceived;
    int256 public avgTemp;

    constructor(
        address _link,
        address _oracle,
        bytes32 _jobId,
        uint256 _oraclePaymentAmount
        )
    public
    {
        setChainlinkToken(_link);
        setChainlinkOracle(_oracle);
        jobId = _jobId;
        oraclePaymentAmount = _oraclePaymentAmount;
    }

    function makeRequest() external returns (bytes32 requestId)
    {
        Chainlink.Request memory req = buildChainlinkRequest(jobId, this, this.fulfill.selector);
        req.add("q", "new york");
        req.add("copyPath", "data.weather.0.avgtempC");
        requestId = sendChainlinkRequestTo(chainlinkOracleAddress(), req, oraclePaymentAmount);
    }

    function resetResult() external
    {
        avgTempReceived = false;
        avgTemp = 0;
    }

    function fulfill(bytes32 _requestId, int256 _avgTemp)
    public
    recordChainlinkFulfillment(_requestId)
    {
        avgTempReceived = true;
        avgTemp = _avgTemp;
    }
}
