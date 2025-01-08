# ❇ Solana Web3.js - AIRDROP
A Typescript Project that acts as a Prerequisite to enter the Turbin3 Program Q1 2025 Cohort. It has scripts that generates keypairs, requests airdrop, transfer sol and interacts with a PDA program on devnet.

> **Onchain Transaction Link:** 
[`https://explorer.solana.com/tx/Qz9B8rzwdPreyU1TFvuBqYWSKkGEmY7nnSpUCxCA3TgfDHrzKVRjb1pQWNRXURLofQj4Sz1LWFLWuZNakn3d6my?cluster=devnet/`](https://explorer.solana.com/tx/Qz9B8rzwdPreyU1TFvuBqYWSKkGEmY7nnSpUCxCA3TgfDHrzKVRjb1pQWNRXURLofQj4Sz1LWFLWuZNakn3d6my?cluster=devnet)

## Prerequisites
1. Node JS Installed
2. Solana CLI installed (Optional if using devnet)
3. NPM Installed and Yarn Installed

## Tech stack used
- uses TypeScript and NodeJS
- yarn (as the package manager)


## Setup
- Clone the repo by running `git clone https://github.com/HermanCeaser/turbin3-preq-one.git`
- Change the directory to `turbin3-preq-one` folder on your machine `cd turbin3-preq-one`
- Install the depencies by running `yarn install`
- start your local validator by running `solana-test-validator`

## RUN
- Create a file called `dev-wallet.json`
- Run `yarn keygen`
- Copy the secret key from the output and paste it in the `dev-wallet.json` then save the save 
  The contents should be a binary array similar to 
  ```json
  [15,71,221,67,2,87,32,15,251,184,9,12,215,157,200,94,85,5,191,215,157,230,152,73,107,215,129,92,109,175,117,102,120,119,241,244,89]
  ```
- Then run the airdop command by typing  `yarn airdop`
- Check the transaction hash on the explorer by clicking the link to see your account balance

- Run `yarn transfer` to transfer some SOL to a your public devnet wallet address and view the transaction on blockchain. Change the Public address in line 15 of [`transfer.ts`](./transfer.ts) to your wallet public address if you want to receive the SOL

- Finally run `yarn enroll` to interact with an onchain program that WBA created. Change the github username in line 9 of [`enroll.ts`](./enroll.ts) to your username if you want to sign this transaction

### About the Files in the project

#### `keygen.ts`

A script that has code to generate a new keypair using web3.js and prints it's  public and secretkey to the console.
transactions to the blockchain

#### `airdrop.ts`

A script that requests airdrop to the generated wallet that is saved to `dev-wallet.json` file 

#### `transfer.ts`

Demonstrates how to generate a new wallet and transfer SOL(Lamports) to another waller

#### `enroll.ts`

Demonstrates how to create a PDA address and use it to interact with another program onchain.

## Contributing
- Fork the repository 
- Create a feature branch and make a pull request with your feature or bugfix

## Happy Hacking!
