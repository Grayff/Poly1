// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const tokenJSON = require("../artifacts/contracts/RR.sol/RR.json");

const tokenAddress = "0x9a80CC7279dC4d8ceB6B8d8Ea5fBAb8493dfe016";
const tokenABI = tokenJSON.abi;
const walletAddress = "0x4F86BE27fe20d64Eb1D19eC310E7e2CACDAf4Cee";

const fxRootContractABI = require("../fxRootContractABI.json");
const fxERC21RootAddress = "0xF9bc4a80464E48369303196645e876c8C7D972de";

async function main() {
    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);
;
    const fxContract = await hre.ethers.getContractAt(fxRootContractABI, fxERC21RootAddress);
    const approveTx = await token.setApprovalForAll(fxERC21RootAddress, true);
    await approveTx.wait();

    console.log("Approval confirmed");
    for (let i = 1; i < 6; i++) {
    const depositTx = await fxContract.deposit(tokenAddress,walletAddress, i,'0x6566');
    await depositTx.wait();
    }
    console.log("Tokens deposited");
  }
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });