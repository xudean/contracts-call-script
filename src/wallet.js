import { Wallet } from "ethers";
import {configDotenv} from "dotenv";
configDotenv()
const privateKey = process.env.PRIVATE_KEY;
const wallet = new Wallet(privateKey);

console.log(`Address: ${wallet.address}`);
