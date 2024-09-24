import {ethers} from "ethers";
import {workerMgtAbi} from "./abi/workerMgtAbi.js";
import { randomBytes } from 'crypto';
import './config.js';

const privateKey = process.env.PRIVATE_KEY;
console.log(`privateKey:${privateKey}`)
const wallet = new ethers.Wallet(privateKey);

const provider = new ethers.providers.JsonRpcProvider('https://rpc-holesky.rockx.com'); //
// const provider = new ethers.JsonRpcProvider('https://eth.llamarpc.com'); // 
const signer = wallet.connect(provider);

//https://github.com/Eoracle/eoracle-middleware/tree/develop/src
const contractAddress = '0x05cB7A91269A436b2C184F1Fc3A5Bf8A53566387';
const contract = new ethers.Contract(contractAddress, workerMgtAbi, signer);

async function callContractFunction() {
    //
    const tx = await contract.getWorkers()
    console.log(tx.length)

    const dataMgtAddr = await contract.dataMgtAddr();
    console.log(`dataMgtAddr: ${dataMgtAddr}`);
    // console.log(tx)
    // await getAdmin()
    // for(var i=0;i<5;i++){
    //     await selectWorker();
    // // }
    // await getNonce()

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

