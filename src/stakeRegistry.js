import {ethers} from "ethers";
import {stakeRegistryAbi} from "./abi/stakeRegistryAbi.js";
import './config.js';

const privateKey = process.env.PRIVATE_KEY;
const wallet = new ethers.Wallet(privateKey);

// const provider = new ethers.JsonRpcProvider('https://rpc-holesky.rockx.com'); // 
const provider = new ethers.providers.JsonRpcProvider('https://eth.llamarpc.com'); //
const signer = wallet.connect(provider);

//https://github.com/Eoracle/eoracle-middleware/tree/develop/src
// eoracle
const contractAddress = '0x761DF0e99160a4bd19391475D2a1101eaab20F24';
//eigenda
//https://github.com/Layr-Labs/eigenlayer-middleware/?tab=readme-ov-file#current-testnet-deployment
// const contractAddress = '0x006124ae7976137266feebfb3f4d2be4c073139d';
//lagrange ?
// const contractAddress = '0x8dcdCc50Cc00Fe898b037bF61cCf3bf9ba46f15C';
//hyperlane ?
//https://docs.hyperlane.xyz/docs/protocol/economic-security/hyperlane-avs
// const contractAddress = '0x272CF0BB70D3B4f79414E0823B426d2EaFd48910';




const contract = new ethers.Contract(contractAddress, stakeRegistryAbi, signer);

async function callContractFunction() {
    const length = await contract.strategyParamsLength(0);
    console.log(length.toString())
    for (var i = 0; i < length; i++) {
        const tx = await contract.strategyParamsByIndex(0, i)
        console.log(`strategy:${tx.strategy}, multiplier:${tx.multiplier}`)
    }


}


await callContractFunction();

