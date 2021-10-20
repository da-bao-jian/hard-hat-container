require("@nomiclabs/hardhat-waffle");
const fs = require('fs');
const config = require('dotenv').config;
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("docker-deploy", "Deploys contract, get wallets, and outputs files", async (taskArgs, hre) => {
  const Greeter = await hre.ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy("Hello, Hardhat!");

  await greeter.deployed();

  const contractAddress = greeter.address;

  const accounts = await hre.ethers.getSigners();
  
  let count = 1;
  for (const account of accounts) {
    console.log("Address %i: \n %s", count, account.address);
    count++;
  }
  
  const walletAddress = accounts[0].address;

  let address = {
    contractAddress: contractAddress,
    walletAddress: walletAddress
  };

  fs.writeFileSync('./address.json', JSON.stringify(address));
});
// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  hardhat: {
    chainId: 1337
  },
};
   