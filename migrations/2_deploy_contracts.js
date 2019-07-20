var Metadata = artifacts.require('./Metadata.sol')
var Token = artifacts.require('./ProjanskyToken.sol')
var ProjanskySales = artifacts.require('./ProjanskySales.sol')

let _ = '        '

module.exports = (deployer, helper, accounts) => {

  deployer.then(async () => {
    try {
      // Deploy Metadata.sol
      await deployer.deploy(Metadata)
      let metadata = await Metadata.deployed()
      console.log(_ + 'Metadata deployed at: ' + metadata.address)

      // Deploy Token.sol
      await deployer.deploy(Token, 'Token Name', 'Token Symbol', metadata.address)
      let token = await Token.deployed()
      console.log(_ + 'Token deployed at: ' + token.address)

      // Deploy ProjanskySales.sol
      await deployer.deploy(ProjanskySales, token.address, 15)
      let sales = await ProjanskySales.deployed()
      console.log(_ + 'Sales deployed at: ' + sales.address)

    } catch (error) {
      console.log(error)
    }
  })
}
