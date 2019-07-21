const path = require("path");

module.exports = {
  migrations_directory: "./migrations",
  contracts_build_directory: path.join(__dirname, "src/contracts"),
  networks: {
    development: {
      host: "localhost",
      port: 7545,
      network_id: "*" // Match any network id
    }
  }
};
