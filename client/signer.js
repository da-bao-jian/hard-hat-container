const ethers = require('ethers');
const abi = require('../artifacts/contracts/Greeter.sol/Greeter.json').abi;
const address = require('../address.json');

debugger
const provider = ethers.getDefaultProvider('http://localhost:8545');
// const provider = new ethers.ethers.providers.JsonRpcProvider();
const signer = provider.getSigner(address.walletAddress || 'UNKNOWN_WALLET_ADDRESS');
const contract = new ethers.ethers.Contract(address.contractAddress || 'UNKNOWN_CONTRACT_ADDRESS', abi, signer);

const init = async () => {
  try {
    const result = await contract.greet();
    console.log({ result });
    const transaction = await contract.setGreeting('Hello from docker!');
    console.log({ transaction }); 
    // Wait for transaction to be complete
    transaction.wait(); 
    // Output result
    console.log({ result: await contract.greet() });
  } catch (error) {
    console.log({ error });
  }
}
init();