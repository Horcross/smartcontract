import { task } from 'hardhat/config'
import { writeFileSync } from '../../helpers/pathHelper'

task('deploy:contract', 'Deploy contract')
  .addParam('contract')
  .setAction(async ({ contract }, hre) => {
    await hre.run('compile')
    const [signer] = await hre.ethers.getSigners()
    const contractFactory = await hre.ethers.getContractFactory(contract)
    // if you mint in constructor, you need to add value in deploy function
    const deployContract = await contractFactory.connect(signer).deploy()
    console.log(`${contract} deployed to ${deployContract.address}`)

    const address = {
      main: deployContract.address,
    }
    const addressData = JSON.stringify(address)
    writeFileSync(`scripts/address/${hre.network.name}/`, `${contract}.json`, addressData)

    await deployContract.deployed()
  },
  )

task('deploy:proxy', 'Deploy Proxy contract')
  .addParam('contract')
  .addParam('proxy')
  .setAction(async ({ contract, proxy }, hre) => {
    await hre.run('compile')
    const contractFactory = await hre.ethers.getContractFactory(contract)
    console.log('Deploying implementation contract')
    const implContract = await contractFactory.deploy()
    await implContract.deployTransaction.wait(1)
    const implAddress = implContract.address
    console.log('Deploying implementation address', implAddress)

    // ERC1967
    const proxyFactory = await hre.ethers.getContractFactory(proxy)
    const proxyContract = await proxyFactory.deploy(implAddress)
    await proxyContract.deployTransaction.wait(1)
    console.log('Deploying Proxy...')

    console.log(`Proxy Contract deployed to ${proxyContract.address}`)

    const address = {
      proxy: proxyContract.address,
      impl: contract,
      implAddr: implAddress,
    }
    const addressData = JSON.stringify(address)
    writeFileSync(`scripts/address/${hre.network.name}/`, 'proxyContract.json', addressData)
    await proxyContract.deployed()
  },
  )
