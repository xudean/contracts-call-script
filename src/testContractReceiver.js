import {ethers} from "ethers";
import {ABI} from "./abi/abi.js";
import {registryABI} from "./abi/stake_registry_abi.js";
import {rewardsCoordinatorAbi} from "./abi/rewardsCoornaditorAbi.js";
import {serviceManagerAbi} from "./abi/serviceManagerAbi.js";
import {stakeRegistryAbi} from "./abi/stakeRegistryAbi.js";
import {workerMgtAbi} from "./abi/workerMgtAbi.js";
import { randomBytes } from 'crypto';
import {testContractAbi} from "./abi/testContractAbi.js";
import {testContractReceiverAbi} from "./abi/testContractReceiverAbi.js";

const privateKey = process.env.PRIVATE_KEY;
const wallet = new ethers.Wallet(privateKey);
import './config.js';



const provider = new ethers.JsonRpcProvider('https://rpc-holesky.rockx.com'); // 
// const provider = new ethers.JsonRpcProvider('https://eth.llamarpc.com'); // 
const signer = await wallet.connect(provider);

//https://github.com/Eoracle/eoracle-middleware/tree/develop/src
const contractAddress = '0xC8f176596610c629315db47281eBEbDB0B02778B';
const contract = new ethers.Contract(contractAddress, testContractReceiverAbi, signer);

async function callContractFunction() {
    const tx = await contract.getBalance()
    await tx.wait()
    console.log(tx)
}


function generateRandomBytes32() {
    return '0x' + randomBytes(32).toString('hex');
}


await callContractFunction();

