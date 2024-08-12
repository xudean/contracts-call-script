import {ethers} from "ethers";
import {ABI} from "./abi/abi.js";
import {registryABI} from "./abi/stake_registry_abi.js";
import {rewardsCoordinatorAbi} from "./abi/rewardsCoornaditorAbi.js";
import {serviceManagerAbi} from "./abi/serviceManagerAbi.js";
import {stakeRegistryAbi} from "./abi/stakeRegistryAbi.js";
import './config.js';

const privateKey = process.env.PRIVATE_KEY;
const wallet = new ethers.Wallet(privateKey);

// const provider = new ethers.JsonRpcProvider('https://rpc-holesky.rockx.com'); // 
const provider = new ethers.JsonRpcProvider('https://eth.llamarpc.com'); // 
const signer = wallet.connect(provider);

//https://github.com/Eoracle/eoracle-middleware/tree/develop/src
const contractAddress = '0x761DF0e99160a4bd19391475D2a1101eaab20F24';
const contract = new ethers.Contract(contractAddress, stakeRegistryAbi, signer);

async function callContractFunction() {
    //
    for (var i = 0; i < 13; i++) {
        const tx = await contract.strategyParamsByIndex(0, i)
        console.log(tx)
    }

    //getRestakeableStrategies
    // const strategies = await contract.getRestakeableStrategies();
    // console.log(strategies)


}


await callContractFunction();

