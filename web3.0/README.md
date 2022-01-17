# Transac - A platform for Etherium transactions




![Transac]




## Introduction
This is a code repository of my first web 3.0 application.
Using web3.0 methodologies of smart contract, Solidity , vite+React and Metamask I have devoloped this platform.
On this platform users can connect their wallet and transfer their Etherium to any other etherium wallet.
All these transactions will be stored on in a smart contract.

## How to run
execute "npm run dev" in client.

## Packages and dependencies 
1.	cd client
2.	npm install –D tailwindcss postcss autoprefixer 
3.	npm install react-icons ethers
4.	cd smart_contract
5.	npm install --save-dev hardhat @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers
6.	npx hardhat
7.	npx hardhat run scripts/deploy.js --network ropsten
