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

const provider = new ethers.providers.JsonRpcProvider('https://rpc-holesky.rockx.com'); //
// const provider = new ethers.JsonRpcProvider('https://eth.llamarpc.com'); // 
const signer = wallet.connect(provider);

//https://github.com/Eoracle/eoracle-middleware/tree/develop/src
const contractAddress = '0x33387A204E8bD02ac2309a35aAa46dFd33148F00';
const contract = new ethers.Contract(contractAddress, workerMgtAbi, signer);

async function callContractFunction() {
    //
    // const tx = await contract.getWorkers()
    // console.log(tx.length)
    // console.log(tx)
    // await getAdmin()
    // for(var i=0;i<5;i++){
        await selectWorker();
    // }
    await getNonce()

    // const ramdom = generateRandomBytes32();
    // console.log(`ramdom:${ramdom}`)
    // const tx2 = await contract.checkWorkerRegistered(ramdom);
    // console.log(tx2)
    // const address = contract.implementation();
    // console.log(`implementation is :{}`,address)
}

function getWorkerIds(){
    return contract.getWorkerIds();
}

function generateRandomBytes32() {
    return '0x' + randomBytes(32).toString('hex');
}

async function getNonce(){
    const nonce =  await contract.getNonce();
    console.log(nonce);
}
async function selectWorker(){
    const res = await contract.selectWorkers(3);
    const recipent = await res.wait();
    const event = recipent.events.find((event)  => event.event === 'SelectWorkers');
    console.log(`random:${event.args.ramdom}, workerIds:${event.args.workerIds}`)
}
async function getAdmin() {
    const events = await contract.queryFilter('AdminChanged');
    events.forEach(event => {
        console.log(`Admin changed from ${event.args.oldAdmin} to ${event.args.newAdmin}`);
    });
}

await callContractFunction();

