/** @type import('hardhat/config').HardhatUserConfig */

require("dotenv").config();
require("@nomiclabs/hardhat-waffle");
console.log("Private key:", process.env.private_key);
module.exports = {
  solidity: "0.8.19",
  defaultNetwork: "sepolia",
  networks:{
    hardhat:{
      forking:{
        url:`https://sepolia.infura.io/v3/3992e4670ba74252864098116d844c36`,
      }
    },
    sepolia:{
      url:`https://sepolia.infura.io/v3/3992e4670ba74252864098116d844c36`,
      account: [process.env.private_key],
      chainId:11155111,
    }
  }
};