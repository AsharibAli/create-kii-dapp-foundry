<p align="center">
    <img align="center" src="https://i.ibb.co/zbFTJSX/kii.webp" width="100"></img>
</p>

<h1 align="center">create-kii-dapp</h1>

<div align="center">
    <img src="https://img.shields.io/badge/platform-KiiChain-purple.svg?style=flat-square" alt="Platform">
    <img src="https://img.shields.io/github/license/asharibali/create-kii-dapp-foundry?color=purple&style=flat-square " alt="License">
    <img src="https://img.shields.io/npm/v/create-kii-dapp?color=purple" alt="npm Version">
    <img src="https://img.shields.io/npm/dm/create-kii-dapp?color=purple" alt="Downloads">
</div><br>

A full-stack starter template featuring **Nextjs & Hardhat or Foundry**, designed for building `Dapps`, as well as developing, deploying, and testing Solidity smart contracts on the KiiChain. This starter kit includes pre-installed packages such as `create-next-app`, `hardhat`, `foundry`, `typescript`, `tailwindcss`, `shadcn-ui`, `web3.js`, and more.

## 📺 Quickstart | Nextjs & Foundry

**You will find the Nextjs & Hardhat implementation [Here](https://github.com/AsharibAli/create-kii-dapp-hardhat).**

<div align="center">
</div>

### ⌛️ create-kii-dapp command

Open up your terminal (or command prompt) and type the following command:

```sh
npx create-kii-dapp <your-dapp-name>

# cd into the directory
cd <your-dapp-name>
```

### 📜 Smart Contracts

All smart contracts are located inside the `backend` aka `foundry` folder, which can be found in the root directory.

```sh
# change directory into the backend folder
cd backend
```

***Note: If you have used the npx command then you don't have to install manually in any directory.***

### 🔑 Private key

Ensure you create a `.env` file in the `backend` directory. Then paste your [Metamask private key](https://metamask.zendesk.com/hc/en-us/articles/360015289632-How-to-export-an-account-s-private-key) in `.env` with the variable name `ACCOUNT_PRIVATE_KEY` as follows:

```sh
ACCOUNT_PRIVATE_KEY=0x734...
```

### ⚙️ Compile

Now, you can write your contracts in `./src/` directory, replace `Greeter.sol` with `<your-contracts>.sol` file.

```sh
# For compiling the smart contracts
forge compile
```

After successful compilation, the artifacts directory will be created in `./out` with a JSON `/<your-contract>/<your-contracts>.json` containing ABI and Bytecode of your compiled smart contracts.

### 🧪 Test

To write tests, go to `./test` directory and create `<your-contracts>.t.sol`, you can test your smart contracts using the following command.

```sh
# For testing the smart contracts
forge test
```


### ⛓️ Deploy

Before deploying the smart contracts, ensure that you have added the [`KiiChain`](https://docs.kiiglobal.io/docsgetting-started) to your MetaMask wallet and that it has sufficient funds. If you do not have testnet $kii on KiiChain, please follow this [faucets guide](https://app.kiichain.io/wallet/accounts).

Also, make changes in `./script/DeployGreeter.s.sol` (replace the deploy greeter contract name with `<your-contract-name>`).

For deploying the smart contracts to `KiiChain` network, type the following command:

```sh
# For deloying the smart contracts
forge script script/DeployGreeter.s.sol --broadcast --rpc-url https://a.sentry.testnet.kiivalidator.com:8645/ --gas-limit 30000000 --with-gas-price 5gwei --skip-simulation
```

```sh
<your-contract> deployed to: 0x...
```

## **Copy and paste the generated contract JSON ABI folder `Greeter.sol` inside the `backend/out/` directory to the `/frontend/` directory.**

## **Copy and paste the deployed contract address [here](https://github.com/AsharibAli/create-kii-dapp-foundry/blob/main/frontend/app/page.tsx#L37).**

### 💻 Next.js client

Start the Next.js app by running the following command in the `frontend` directory:

```sh
# Change directory into the frontend folder 
cd frontend

# Start the development server
npm run dev
```

<table align="center">
  <tr>
    <td align="center">
      <img src="https://i.ibb.co/Lx35wHy/before-state-update.png" alt="create-kii-dapp-before" width="500"/>
      <b>(/) create-kii-dapp Before State Update</b>
    </td>
    <td align="center">
      <img src="https://i.ibb.co/HD2DFQr/after-state-update.png" alt="create-kii-dapp-after" width="500"/>
      <b>(/) create-kii-dapp After State Update</b>
    </td>
  </tr>
</table>

## ➡️ Contributing

We welcome contributions from the community! If you'd like to contribute, please follow the guidelines in our [CONTRIBUTING.md](https://github.com/AsharibAli/create-kii-dapp-foundry/blob/main/CONTRIBUTING.md) file.


## ⚖️ License

create-kii-dapp is licensed under the [MIT License](https://github.com/AsharibAli/create-kii-dapp-foundry/blob/main/LICENSE.md).

<hr>
Don't forget to star this repositry ⭐️ and Follow on X ~ <a href="https://twitter.com/0xAsharib" target="_blank"><img src="https://img.shields.io/twitter/follow/0xAsharib?style=social" alt="twitter" /></a>
