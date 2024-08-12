import {ethers} from "ethers";
import {ABI} from "./abi/abi.js";
import './config.js';

const privateKey = process.env.PRIVATE_KEY; 
const wallet = new ethers.Wallet(privateKey);

const provider = new ethers.JsonRpcProvider('https://rpc-holesky.rockx.com'); //
const signer = wallet.connect(provider);


const contractAddress = '0x3594124970315f22324e1451D338D554a6c54EA1';
const contract = new ethers.Contract(contractAddress, ABI, signer);

async function callContractFunction() {
    // const transaction = await contract.updateAVSMetadataURI("https://storage.googleapis.com/pado-online/others/pado_zkFHE_holesky.json");
    // const owner = await contract.getOperatorRestakedStrategies('0x024e45D7F868C41F3723B13fD7Ae03AA5A181362')
    const owner = await contract.getAvsDirectory()
    console.log(owner);
    // const transaction = await contract.initialize();
    // const receipt = await transaction.wait();
    // console.log('Transaction successful:', receipt);
}


await callContractFunction();

