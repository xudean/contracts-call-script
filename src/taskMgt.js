import {ethers} from "ethers";
import {ABI} from "./abi/abi.js";
import {registryABI} from "./abi/stake_registry_abi.js";
import {rewardsCoordinatorAbi} from "./abi/rewardsCoornaditorAbi.js";
import {serviceManagerAbi} from "./abi/serviceManagerAbi.js";
import {stakeRegistryAbi} from "./abi/stakeRegistryAbi.js";
import {workerMgtAbi} from "./abi/workerMgtAbi.js";
import { randomBytes } from 'crypto';
import {taskMgtAbi} from "./abi/taskMgtAbi.js";
import './config.js';

const privateKey = process.env.PRIVATE_KEY;
const wallet = new ethers.Wallet(privateKey);

const provider = new ethers.providers.JsonRpcProvider('https://rpc-holesky.rockx.com'); // 
const signer = wallet.connect(provider);

//https://github.com/Eoracle/eoracle-middleware/tree/develop/src
const contractAddress =
    '0x26A9B77CA4f230dD7292f8e1159D979006094c9F';
const contract = new ethers.Contract(contractAddress, taskMgtAbi, signer);

async function callContractFunction() {
    //
    // const tx = await contract.getVersion()
    const tx = await contract.getCompletedTaskById('0x6bdb9954ec3f235166ef5e49b00a86bcb1bdb1fa126ea9e2c9416208ce33ed1f')
    console.log(tx)
}


function generateRandomBytes32() {
    return '0x' + randomBytes(32).toString('hex');
}


await callContractFunction();

