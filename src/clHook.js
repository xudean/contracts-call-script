import {ethers, utils, BigNumber as BN} from 'ethers';
import './config.js';
import {attestationRegistryAbi} from "./abi/attestationRegistryAbi.js";
import {clHookAbi} from "./abi/clHookAbi.js";
const privateKey = process.env.PRIVATE_KEY;
console.log(privateKey)
const wallet = new ethers.Wallet(privateKey);

const provider = new ethers.providers.JsonRpcProvider('https://bsc-testnet.infura.io/v3/63e78a3a0c594e5c8b7babcbe6ac1381'); //
const signer = wallet.connect(provider);
console.log(`address is:${signer.address}`)

async function getAtt(networkName, provider) {
    const contract = new ethers.Contract("0x41faD552F1eBDE2A498eABC5Eb2137DA7bcd5274", clHookAbi, signer);
    // const tx = await contract.setBaseValue(0)
    // const receipt = await tx.wait();
    // console.log('receipt:', receipt)
    const baseValue = await contract.getBaseValue()
    console.log(`baseValue is:${baseValue}`)
}

getAtt()
