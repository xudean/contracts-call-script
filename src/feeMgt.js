import {ethers} from "ethers";
import { randomBytes } from 'crypto';
import {feeMgtAbi} from "./abi/feeMgtAbi.js";
import './config.js';

const privateKey = process.env.PRIVATE_KEY;
const wallet = new ethers.Wallet(privateKey);

const provider = new ethers.providers.JsonRpcProvider('https://eth-holesky.g.alchemy.com/v2/63xm51Uk6Vj9Z9HRNOBPXAmY_jN0fRlf'); //
const signer = wallet.connect(provider);

//https://github.com/Eoracle/eoracle-middleware/tree/develop/src
const contractAddress = '0xfcde80f61B97FA974A5E1De2A2580A5843CaABE2';
const contract = new ethers.Contract(contractAddress, feeMgtAbi, signer);

async function callContractFunction() {
    //
    console.log('deployer is:',await signer.getAddress())
    console.log('owner is:',await contract.owner())
    // const tx = await contract.addFeeToken('ETH2', '0x0000000000000000000000000000000000000001',1_000_000_000_000_000);
    // const recipent = await tx.wait();
    // const rsp = await contract.getFeeTokens();
    // console.log(rsp);

    const tx = await contract.deleteFeeToken('ETH2');
    const recipent = await tx.wait();
    const rsp = await contract.getFeeTokens();
    console.log(rsp);

    // const ramdom = generateRandomBytes32();
    // console.log(`ramdom:${ramdom}`)
    // const tx2 = await contract.checkWorkerRegistered(ramdom);
    // console.log(tx2)
    // const address = contract.implementation();
    // console.log(`implementation is :{}`,address)
}


function generateRandomBytes32() {
    return '0x' + randomBytes(32).toString('hex');
}


await callContractFunction();

