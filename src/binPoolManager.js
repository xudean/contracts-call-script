import {ethers, utils, BigNumber as BN} from 'ethers';
import {binPoolManagerAbi} from "./abi/binPoolManagerAbi.js";
import './config.js';
const privateKey = process.env.PRIVATE_KEY;
console.log(privateKey)
const wallet = new ethers.Wallet(privateKey);

const provider = new ethers.providers.JsonRpcProvider('https://bsc-testnet.infura.io/v3/63e78a3a0c594e5c8b7babcbe6ac1381'); //
const signer = wallet.connect(provider);
console.log(`address is:${signer.address}`)

async function initPool(networkName, provider) {
    const contract = new ethers.Contract("0x68554d088F3640Bd2A7B38b43AE70FDcc16ef197", binPoolManagerAbi, signer);
    const poolKey = {
        currency0:"0x79C104C2cbb9bc6EEf3985775083439fe9b51297",
        currency1:"0xfE4153729b4e041B4adfEcC92a9eCA002E7F2Ce5",
        hooks:"0x7659Dbe231fC8116caeEa7aBf08f914125f9f1F6",
        poolManager:"0x68554d088F3640Bd2A7B38b43AE70FDcc16ef197",
        // fee: 0x800000,
        fee: 0x800000,
        parameters: "0x00000000000000000000000000000000000000000000000000000000003c0042"
    }

    let tx;
    try {
        tx = await contract.initialize(poolKey, 8389349);
        const recipient = await tx.wait();
        console.log(recipient)
    }catch (e){
        try {
            tx = await contract.callStatic.initialize(poolKey, 8389349);
        } catch (error) {
            console.log('initialize caught error:\n', error);
        }
    }
}

initPool()
