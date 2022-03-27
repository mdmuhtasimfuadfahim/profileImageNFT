const hre = require("hardhat");

const main = async () => {
  const profileImageFactory = await hre.ethers.getContractFactory(
    'ProfileImageNfts',
  )
  const profileImageContract = await profileImageFactory.deploy()

  await profileImageContract.deployed()

  console.log('Profile Image Minter is Deployed to:', profileImageContract.address)
}

;(async () => {
  try {
    await main()
    process.exit(0)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
})();
