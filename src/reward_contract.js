import {ethers} from "ethers";
import {ABI} from "./abi/abi.js";
import {registryABI} from "./abi/stake_registry_abi.js";
import './config.js';

const privateKey = process.env.PRIVATE_KEY;
const wallet = new ethers.Wallet(privateKey);

const provider = new ethers.JsonRpcProvider('https://rpc-holesky.rockx.com'); // 
const signer = wallet.connect(provider);


const contractAddress = '0x214944639f918246ac101E13404620b8232aF239';
const contract = new ethers.Contract(contractAddress, registryABI, signer);

async function callContractFunction() {
    const quorum = {
        strategies:
            [
                {
                    strategy: '0x7D704507b76571a51d9caE8AdDAbBFd0ba0e63d3',
                    multiplier: 5_000
                },
                {
                    strategy: '0x80528D6e9A2BAbFc766965E0E26d5aB08D9CFaF9',
                    multiplier: 5_000
                }
            ]
    }
    const tx = await contract.initialize('0xbd0A958ac8a7805a9BE08aA5127d3124f901C5f6', 10000000000,quorum)
    const recipient = await tx.wait();
    console.log(recipient);
}


await callContractFunction();

