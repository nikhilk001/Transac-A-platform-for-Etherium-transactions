require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/liTsZpkvhff0egSs0ShJAaDzue-VbIDj",
      accounts: ["f34f8ee01db1477b212883c0795d82a6c5ac743c286ced99be69b60981428dba"]
    }
  }
};
