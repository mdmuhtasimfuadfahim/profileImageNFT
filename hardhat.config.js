require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: `${process.env.ALCHEMY_HTTP_KEY}`,
      accounts: process.env.METAMASK_PRIVATE_KEY
    },
  },
};
