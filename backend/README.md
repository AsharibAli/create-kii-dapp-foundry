# `create-kii-dapp` Foundry Implementation | Backend

This project demonstrates a basic Foundry implementation. It comes with a sample contract, tests for that contract, and scripts that deploy that contract on the KiiChain.

## Setup

First, navigate to the Foundry folder which is `backend` inside the project directory and install the dependencies:

```shell
# Navigate to the folder
cd backend

# Install dependencies
forge install
```

## Try running some of the following commands

```shell
# For compiling the smart contracts
forge compile

# For testing the smart contracts
forge test

# For deploying the smart contracts
forge script script/DeployGreeter.s.sol --broadcast --rpc-url https://a.sentry.testnet.kiivalidator.com:8645/ --gas-limit 30000000 --with-gas-price 5gwei --skip-simulation

# Display help information for Foundry
forge help
```
