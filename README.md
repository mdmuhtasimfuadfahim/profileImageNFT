# Profile Image NFT Smart Contract for Twitter

This project demonstrates a basic Hardhat use case. It comes with a sample contract for twitter images NFT. This contract will check if the uploaded image is NFT or not. If it is NFT then it goes to OpenSea NFT Marketplace.


### Technology stack and tools

  - [Node.JS](https://nodejs.org/en/)
  - [Yarn](https://yarnpkg.com/) / NPM

### Major dependencies

  - hardhat
  - @openzeppelin/contracts
  - @nomiclabs/hardhat-waffle
  - ethers

### Getting started

 1. Dwonload / clone the repo by:
 ```shell
 git clone https://github.com/mdmuhtasimfuadfahim/profileImageNFT
 ```
 2. From the root directory install all dependencies by:
 ```shell
 yarn install 
 # or
 npm install
 ```
 3. Create an .env file and set the variables:
 ```shell
 METAMASK_PRIVATE_KEY = "private_key_of_metamask_wallet"
 ALCHEMY_HTTP_KEY = alchemy_project_url
 ```
 4. Compile and deploy the smart contract by:
 ```shell
 npx hardhat compile
 npx run scripts/deploy.js --network rinkeby
 # or
 node scripts/deploy.js
 ```
 5. Copy the contract address and use it.

 **Enjoy :D**

### License
  -MIT

### Some basic hardhat commands 

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```

##### Thank you
