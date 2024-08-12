import {ethers} from "ethers";
import {ABI} from "./abi/abi.js";
import {registryABI} from "./abi/stake_registry_abi.js";
import {rewardsCoordinatorAbi} from "./abi/rewardsCoornaditorAbi.js";
import {serviceManagerAbi} from "./abi/serviceManagerAbi.js";
import {stakeRegistryAbi} from "./abi/stakeRegistryAbi.js";
import {dataMgtAbi} from "./abi/dataMgtAbi.js";
import './config.js';


const privateKey = process.env.PRIVATE_KEY;
console.log(privateKey)
const wallet = new ethers.Wallet(privateKey);

// const provider = new ethers.JsonRpcProvider('https://rpc-holesky.rockx.com'); // 
const provider = new ethers.providers.JsonRpcProvider('https://rpc-holesky.rockx.com'); // 
const signer = wallet.connect(provider);

//https://github.com/Eoracle/eoracle-middleware/tree/develop/src
const contractAddress = "0x4C5A3707578b1481bf60CC75177d13B9b7998D19";
const contract = new ethers.Contract(contractAddress, dataMgtAbi, signer);

async function callContractFunction() {
    //
    //getRestakeableStrategies
    const workerMgt = await contract.getDataByOwner('0x5DDAbE5dB4cE8eb0A4F5C61e40Ec5EBc46460E9F');
    for (let i = 0; i < workerMgt.length; i++) {
        console.log(workerMgt[i][0]);
        const dataInfo = await contract.getDataById(workerMgt[i][0]);
        console.log(dataInfo.workerIds)

    }
    // console.log(strategies)


}


await callContractFunction();

