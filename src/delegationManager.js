import {ethers} from "ethers";
import {ABI} from "./abi/abi.js";
import {registryABI} from "./abi/stake_registry_abi.js";
import {rewardsCoordinatorAbi} from "./abi/rewardsCoornaditorAbi.js";
import {serviceManagerAbi} from "./abi/serviceManagerAbi.js";
import {stakeRegistryAbi} from "./abi/stakeRegistryAbi.js";
import {workerMgtAbi} from "./abi/workerMgtAbi.js";
import { randomBytes } from 'crypto';
import './config.js';

const privateKey = process.env.PRIVATE_KEY;
const wallet = new ethers.Wallet(privateKey);

const provider = new ethers.JsonRpcProvider('https://rpc-holesky.rockx.com'); // 
// const provider = new ethers.JsonRpcProvider('https://eth.llamarpc.com'); // 
const signer = wallet.connect(provider);

//https://github.com/Eoracle/eoracle-middleware/tree/develop/src
const contractAddress = '0xA44151489861Fe9e3055d95adC98FbD462B948e7';
const contract = new ethers.Contract(contractAddress, workerMgtAbi, signer);

async function callContractFunction() {
    //
    const tx = await contract.owner()
    console.log(tx)
    const ramdom = generateRandomBytes32();
    console.log(`ramdom:${ramdom}`)
    const tx2 = await contract.checkWorkerRegistered(ramdom);
    console.log(tx2)
    // const address = contract.implementation();
    // console.log(`implementation is :{}`,address)
}


function generateRandomBytes32() {
    return '0x' + randomBytes(32).toString('hex');
}


await callContractFunction();

