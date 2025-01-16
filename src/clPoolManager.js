import {ethers, utils, BigNumber as BN} from 'ethers';
import {ClPoolManagerAbi} from "./abi/clPoolManager.js";
import './config.js';
const privateKey = process.env.PRIVATE_KEY;
console.log(privateKey)
const wallet = new ethers.Wallet(privateKey);

const provider = new ethers.providers.JsonRpcProvider('https://bsc-testnet.infura.io/v3/63e78a3a0c594e5c8b7babcbe6ac1381'); //
const signer = wallet.connect(provider);
console.log(`address is:${signer.address}`)

async function initPool(networkName, provider) {
    const contract = new ethers.Contract("0x70890E308DCE727180ac1B9550928fED342dea52", ClPoolManagerAbi, signer);
    const poolKey = {
        currency0:"0x79C104C2cbb9bc6EEf3985775083439fe9b51297",
        currency1:"0xfE4153729b4e041B4adfEcC92a9eCA002E7F2Ce5",
        hooks:"0x80bAAa4F87Ee681220280Bff901B58414b21391C",
        poolManager:"0x70890E308DCE727180ac1B9550928fED342dea52",
        fee: 0x800000,
        parameters: "0x00000000000000000000000000000000000000000000000000000000000a0040"
    }
    const tx = await contract.initialize(poolKey,"79228162514264337593543950336");
    const recipient =  await tx.wait();
    console.log(recipient)
}

initPool()
