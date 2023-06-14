import ERC6551RegistryABI from '../artifacts/contracts/ERC6551Registry.sol/ERC6551Registry.json'
import ERC6551AccountUpgradeableABI from '../artifacts/contracts/examples/upgradeable/ERC6551AccountUpgradeable.sol/ERC6551AccountUpgradeable.json'
import SimpleERC6551AccountABI from '../artifacts/contracts/examples/simple/SimpleERC6551Account.sol/SimpleERC6551Account.json'
import TestNFTABI from '../artifacts/contracts/TestNFT.sol/TestNFT.json'
import HardhatNFTAddr from '../scripts/address/hardhat/TestNFT.json'
import HardhatERC6551AccountAddr from '../scripts/address/hardhat/ERC6551AccountUpgradeable.json'

const ERC6551RegistryAddress = { main: '0x759C748311F1b4BDb3E7D7C2B61E32818AE68d97' }
const SimpleERC6551AccountAddress = { main: '0xf71b8187d5dDC8a3F87B44d149D51aC530d5EeA2' }
export { ERC6551RegistryABI, ERC6551RegistryAddress, SimpleERC6551AccountABI, SimpleERC6551AccountAddress, TestNFTABI, HardhatNFTAddr, HardhatERC6551AccountAddr, ERC6551AccountUpgradeableABI }
