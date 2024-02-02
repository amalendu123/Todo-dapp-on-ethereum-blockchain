/** @type import('hardhat/config').HardhatUserConfig */
const {infura_api_key,private_key} = process.env;
require("dotenv").config;
require("@nomiclabs/hardhat-waffle");
module.exports = {
  solidity: "0.8.19",
  defaultNetwork: "sepolia",
  networks:{
    hardhat:{},
    sepolia:{
      url:`https://sepolia.infura.io/v3/${infura_api_key}`,
      account:[private_key],
      chainId:11155111,
    }
  }
};