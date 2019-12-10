const Oracle = artifacts.require("Oracle");

module.exports = async function() {
  const deployedOracle = await Oracle.deployed();
  // await deployedOracle.resetResult();

  avgTempReceived_WWO = await deployedOracle.avgTempReceived_WWO();
  avgTemp_WWO = await deployedOracle.avgTemp_WWO();
  console.log(`Received result (WWO): ${avgTempReceived_WWO}`);
  console.log(`Initial result (WWO): ${avgTemp_WWO.toString()}`);

  console.log("Making a Chainlink request using a Honeycomb job (WWO)...");
  requestIdWWO = await deployedOracle.makeRequestWWO.call();
  await deployedOracle.makeRequestWWO();
  console.log(`Request ID (WWO): ${requestIdWWO}`);

  console.log("Waiting for the request to be fulfilled...");
  while (true) {
    const responseEvents = await deployedOracle.getPastEvents(
      "ChainlinkFulfilled",
      { filter: { id: requestIdWWO } }
    );
    if (responseEvents.length !== 0) {
      console.log("Request fulfilled!");
      break;
    }
  }

  avgTempReceived_WWO = await deployedOracle.avgTempReceived_WWO();
  avgTemp_WWO = await deployedOracle.avgTemp_WWO();
  console.log(`Received result: ${avgTempReceived_WWO}`);
  console.log(`Final result: ${avgTemp_WWO.toString()}`);

  avgTempReceived_AERIS = await deployedOracle.avgTempReceived_AERIS();
  avgTemp_AERIS = await deployedOracle.avgTemp_AERIS();
  console.log(`Received result (AERIS): ${avgTempReceived_AERIS}`);
  console.log(`Initial result (AERIS): ${avgTemp_AERIS.toString()}`);

  console.log("Making a Chainlink request using a Honeycomb job (AERIS)...");
  requestIdAERIS = await deployedOracle.makeRequestAERIS.call();
  await deployedOracle.makeRequestAERIS();
  console.log(`Request ID (AERIS): ${requestIdAERIS}`);

  console.log("Waiting for the request to be fulfilled...");
  while (true) {
    const responseEvents = await deployedOracle.getPastEvents(
      "ChainlinkFulfilled",
      { filter: { id: requestIdAERIS } }
    );
    if (responseEvents.length !== 0) {
      console.log("Request fulfilled!");
      break;
    }
  }

  avgTempReceived_AERIS = await deployedOracle.avgTempReceived_AERIS();
  avgTemp_AERIS = await deployedOracle.avgTemp_AERIS();
  console.log(`Received result: ${avgTempReceived_AERIS}`);
  console.log(`Final result: ${avgTemp_AERIS.toString()}`);

  process.exit();
};
