import {ethers} from "ethers";
import {ABI} from "./abi/abi.js";
import {registryABI} from "./abi/stake_registry_abi.js";
import {rewardsCoordinatorAbi} from "./abi/rewardsCoornaditorAbi.js";
import {serviceManagerAbi} from "./abi/serviceManagerAbi.js";
import {stakeRegistryAbi} from "./abi/stakeRegistryAbi.js";
import {workerMgtAbi} from "./abi/workerMgtAbi.js";
import { randomBytes } from 'crypto';
import {testContractAbi} from "./abi/testContractAbi.js";
import './config.js';

const privateKey = process.env.PRIVATE_KEY;
const wallet = new ethers.Wallet(privateKey);

const provider = new ethers.JsonRpcProvider('https://rpc-holesky.rockx.com'); // 
// const provider = new ethers.JsonRpcProvider('https://eth.llamarpc.com'); // 
const signer = await wallet.connect(provider);

//https://github.com/Eoracle/eoracle-middleware/tree/develop/src
const contractAddress = '0x16e7B494D678002080c08c0dfa4319a2dF3Cd496';
const contract = new ethers.Contract(contractAddress, testContractAbi, signer);

async function callContractFunction() {
    //transfer
    const tx2 = await contract.transferToken({value: ethers.parseEther("0.0001")});
    await tx2.wait()
    console.log(tx2)
}

await callContractFunction();

