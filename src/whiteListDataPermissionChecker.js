import {ethers} from "ethers";
import {workerMgtAbi} from "./abi/workerMgtAbi.js";
import { randomBytes } from 'crypto';
import './config.js';
import {whiteListDataPermissionAbi} from "./abi/whiteListDataPermissionAbi.js";

const privateKey = process.env.PRIVATE_KEY;
console.log(`privateKey:${privateKey}`)
const wallet = new ethers.Wallet(privateKey);

const provider = new ethers.providers.JsonRpcProvider('https://rpc-holesky.rockx.com'); //
const signer = wallet.connect(provider);

const contractAddress = '0xE616321CFFe931e2F31062bE6cc59772f56dB720';
const contract = new ethers.Contract(contractAddress, whiteListDataPermissionAbi, signer);

async function callContractFunction() {
    //
    let tx = await contract.owner()
    console.log(tx)
    tx = await contract.addWhiteList('0xE616321CFFe931e2F31062bE6cc59772f56dB720')
    const receipt = await tx.wait();
    console.log(receipt);

}

await callContractFunction();

