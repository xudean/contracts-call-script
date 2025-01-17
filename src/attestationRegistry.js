import {ethers, utils, BigNumber as BN} from 'ethers';
import './config.js';
import {attestationRegistryAbi} from "./abi/attestationRegistryAbi.js";
const privateKey = process.env.PRIVATE_KEY;
console.log(privateKey)
const wallet = new ethers.Wallet(privateKey);

const provider = new ethers.providers.JsonRpcProvider('https://bsc-testnet.infura.io/v3/63e78a3a0c594e5c8b7babcbe6ac1381'); //
const signer = wallet.connect(provider);
console.log(`address is:${signer.address}`)

async function getAtt(networkName, provider) {
    const contract = new ethers.Contract("0x11701Cf8Df597668C8dCCdD67Fd0836fB8564f80", attestationRegistryAbi, signer);
    const attestations = await contract.getAttestationByRecipient("0x6b28B1D10D45fD811a9fb48Ed60E394f7cB8D34f")
    console.log('get attestations=', attestations)
}

getAtt()
