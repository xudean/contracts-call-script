import {ethers} from "ethers";
import {ABI} from "./abi/abi.js";
import {registryABI} from "./abi/stake_registry_abi.js";
import {rewardsCoordinatorAbi} from "./abi/rewardsCoornaditorAbi.js";
import {serviceManagerAbi} from "./abi/serviceManagerAbi.js";
import {stakeRegistryAbi} from "./abi/stakeRegistryAbi.js";
import {workerMgtAbi} from "./abi/workerMgtAbi.js";
import { randomBytes } from 'crypto';
import {padoRegistryCoordinator} from "./abi/padoRegistryCoordinator.js";
import './config.js';

const privateKey = process.env.PRIVATE_KEY;
const wallet = new ethers.Wallet(privateKey);

const provider = new ethers.JsonRpcProvider('https://rpc-holesky.rockx.com'); // 
// const provider = new ethers.JsonRpcProvider('https://eth.llamarpc.com'); // 
const signer = wallet.connect(provider);

//https://github.com/Eoracle/eoracle-middleware/tree/develop/src
const contractAddress = '0x9A8Cd787251189ED13B188Dae92a79c3b4B23fDF';
const contract = new ethers.Contract(contractAddress, padoRegistryCoordinator, signer);

async function callContractFunction() {
    //
    const tx = await contract.owner()
    console.log(tx)
    const workerMgt = await contract.workerMgt()
    console.log(workerMgt)
}


function generateRandomBytes32() {
    return '0x' + randomBytes(32).toString('hex');
}


await callContractFunction();

