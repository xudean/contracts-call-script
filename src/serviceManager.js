import {ethers} from "ethers";
import {ABI} from "./abi/abi.js";
import {registryABI} from "./abi/stake_registry_abi.js";
import {rewardsCoordinatorAbi} from "./abi/rewardsCoornaditorAbi.js";
import {serviceManagerAbi} from "./abi/serviceManagerAbi.js";
import './config.js';

const privateKey = process.env.PRIVATE_KEY;
const wallet = new ethers.Wallet(privateKey);

// const provider = new ethers.JsonRpcProvider('https://rpc-holesky.rockx.com'); // 
const provider = new ethers.JsonRpcProvider('https://eth.llamarpc.com'); // 
const signer = wallet.connect(provider);

//https://github.com/Eoracle/eoracle-middleware/tree/develop/src
const contractAddress = '0x870679e138bcdf293b7ff14dd44b70fc97e12fc0';
const contract = new ethers.Contract(contractAddress, serviceManagerAbi, signer);

async function callContractFunction() {
    //
    // const tx = await contract.getOperatorRestakedStrategies('0x4bd479a34450d0cb1f5ef16a877bee47e1e4cdb9')
    // console.log(tx)

    //getRestakeableStrategies
    const strategies = await contract.getRestakeableStrategies();
    console.log(strategies)


}


await callContractFunction();

