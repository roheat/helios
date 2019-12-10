const Oracle = artifacts.require("Oracle");
const LinkTokenInterface = artifacts.require("LinkTokenInterface");

const linkTokenAddress = "0x20fE562d797A42Dcb3399062AE9546cd06f63280";
const oracle = "0x4a3fbbb385b5efeb4bc84a25aaadcd644bd09721";
const jobId_WWO = web3.utils.toHex("a37ee8100c4c4ab19e30ae8039289b67");
const jobId_AERIS = web3.utils.toHex("bd3fdae4d7a94616ac1ed4cf1171dc86");
const perCallLink = web3.utils.toWei("0.1");
const depositedLink = web3.utils.toWei("1");

module.exports = async function(deployer) {
  await deployer.deploy(
    Oracle,
    linkTokenAddress,
    oracle,
    jobId_WWO,
    jobId_AERIS,
    perCallLink
  );
  const deployedOracle = await Oracle.deployed();

  console.log("Oracle deployed at ", deployedOracle.address);

  const linkToken = await LinkTokenInterface.at(linkTokenAddress);
  await linkToken.transfer(deployedOracle.address, depositedLink);
};
