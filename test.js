const Oracle = artifacts.require("Oracle");

module.exports = async function() {
  const deployedOracle = await Oracle.deployed();
  await deployedOracle.resetResult();

  avgTempReceived = await deployedOracle.avgTempReceived();
  avgTemp = await deployedOracle.avgTemp();
  console.log(`Received result: ${avgTempReceived}`);
  console.log(`Initial result: ${avgTemp.toString()}`);

  console.log("Making a Chainlink request using a Honeycomb job...");
  requestId = await deployedOracle.makeRequest.call();
  await deployedOracle.makeRequest();
  console.log(`Request ID: ${requestId}`);

  console.log("Waiting for the request to be fulfilled...");
  while (true) {
    const responseEvents = await deployedOracle.getPastEvents(
      "ChainlinkFulfilled",
      { filter: { id: requestId } }
    );
    if (responseEvents.length !== 0) {
      console.log("Request fulfilled!");
      break;
    }
  }

  avgTempReceived = await deployedOracle.avgTempReceived();
  result = await deployedOracle.avgTemp();
  console.log(`Received result: ${avgTempReceived}`);
  console.log(`Final result: ${avgTemp.toString()}`);

  process.exit();
};
