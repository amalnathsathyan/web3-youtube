require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();

module.exports = {
  solidity: '0.8.9',
  networks: {
    hardhat: {},
    mumbai: {
      url: 'https://rpc-mumbai.maticvigil.com',
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: 'F8VK4D4VEF27BRAFC42DITTV5PN9IDN4IA', // Your Etherscan API key
  },
  paths: {
    artifacts: './artifacts',
  },
};
