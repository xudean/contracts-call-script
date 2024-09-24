import {ethers} from "ethers";
import {ABI} from "../abi/BrevisRequest.js";
import {configDotenv} from "dotenv";

configDotenv()
const privateKey = process.env.PRIVATE_KEY;
console.log(`privateKey:${privateKey}`)

const wallet = new ethers.Wallet(privateKey);

const provider = new ethers.providers.JsonRpcProvider('https://bsc-testnet-dataseed.bnbchain.org'); //
const signer = wallet.connect(provider);

//https://github.com/Eoracle/eoracle-middleware/tree/develop/src
const contractAddress = '0xF7E9CB6b7A157c14BCB6E6bcf63c1C7c92E952f5';
const contract = new ethers.Contract(contractAddress, ABI, signer);

async function callContractFunction() {
    //
    const owner = await contract.owner()
    console.log(`owner:${owner}`)
    const proofId = '0x1f90985cff388a590f488e3f89cd9634c7781c72731c995dc9b2a5cc50beb009';
    const nonce = 1727165434;
    const address = await signer.getAddress();
    const callBackAddress = '0x26D9AFB34eE9D1e860607f1D4c06d6Fc8E66d67E';
    const option = 0;
    const tx = await contract.sendRequest(proofId, nonce, '0x5DDAbE5dB4cE8eb0A4F5C61e40Ec5EBc46460E9F', [callBackAddress,0], option)
    await tx.wait()
    console.log(tx)
}


await callContractFunction();

