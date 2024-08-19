require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/RlbdioaDYrvNXHb8nEWcd4X5P3NScEC5",
      accounts: ["e4cddf0ba447258330af0f4263483fd7bdee6cc29ccba0ff62043958c801fb45"],
    },
  },
};