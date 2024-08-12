import {ethers} from "ethers";
import {ABI} from "./abi/abi.js";
import {registryABI} from "./abi/stake_registry_abi.js";
import {rewardsCoordinatorAbi} from "./abi/rewardsCoornaditorAbi.js";
import './config.js';

const privateKey = process.env.PRIVATE_KEY;
const wallet = new ethers.Wallet(privateKey);

const provider = new ethers.JsonRpcProvider('https://rpc-holesky.rockx.com'); // 
const signer = wallet.connect(provider);


const contractAddress = '0xAcc1fb458a1317E886dB376Fc8141540537E68fE';
const contract = new ethers.Contract(contractAddress, rewardsCoordinatorAbi, signer);

async function callContractFunction() {
    const tx = await contract.initialize('0xbd0A958ac8a7805a9BE08aA5127d3124f901C5f6', 10000000000,quorum)
    const recipient = await tx.wait();
    console.log(recipient);
}


await callContractFunction();

