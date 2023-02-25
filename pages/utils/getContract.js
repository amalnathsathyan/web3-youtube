import ContractAbi from '../../artifacts/contracts/YouTube.sol/YouTube.json';
import { ethers } from 'ethers';

export default async function getContract() {
  //   'https://polygon-mumbai.g.alchemy.com/v2/SdRBXKTlNnYl3phClUje8bgWvZ9ha6TL'

  console.log('#########################', { ethers }, '###############################');

  const provider = new ethers.providers.Web3Provider(window.ethereum);

  await provider.send('eth_requestAccounts', []);

  // The MetaMask plugin also allows signing transactions to
  // send ether and pay to change state within the blockchain.
  // For this, you need the account signer...
  const signer = provider.getSigner();
  // Creating a new contract factory with the signer, address and ABI
  let contract = new ethers.Contract(
    '0x4f08d950c1e90ebe2e38c8e9126b63a938fdd25e',
    ContractAbi.abi,
    signer
  );
  // Returning the contract
  return contract;
}
