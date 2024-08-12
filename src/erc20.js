import {ethers} from "ethers";
import {ABI} from "./abi/abi.js";
import {registryABI} from "./abi/stake_registry_abi.js";
import {rewardsCoordinatorAbi} from "./abi/rewardsCoornaditorAbi.js";
import {serviceManagerAbi} from "./abi/serviceManagerAbi.js";
import {stakeRegistryAbi} from "./abi/stakeRegistryAbi.js";
import {workerMgtAbi} from "./abi/workerMgtAbi.js";
import { randomBytes } from 'crypto';
import {testContractAbi} from "./abi/testContractAbi.js";
import {erc20Abi} from "./abi/erc20Abi.json.js";
import './config.js';

const privateKey = process.env.PRIVATE_KEY;
const wallet = new ethers.Wallet(privateKey);

const provider = new ethers.JsonRpcProvider('https://rpc-holesky.rockx.com'); // 
// const provider = new ethers.JsonRpcProvider('https://eth.llamarpc.com'); // 
const signer = await wallet.connect(provider);

//https://github.com/Eoracle/eoracle-middleware/tree/develop/src
const contractAddress = '0xd1bB83a559B0eaC67F24A394B48631C2dc1c77eF';
const contract = new ethers.Contract(contractAddress, erc20Abi, signer);

async function callContractFunction() {
    //transfer
    const tx2 = await contract.mint("0x024e45D7F868C41F3723B13fD7Ae03AA5A181362","100000000000000000000000000");
    console.log(tx2)
    // const tx2 = await contract.balanceOf("0x024e45D7F868C41F3723B13fD7Ae03AA5A181362");
    // console.log(tx2)
}

await callContractFunction();

