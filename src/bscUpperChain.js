import {ethers, utils, BigNumber as BN} from 'ethers';
import {proxyabi} from "./abi/proxyabi.js";
import './config.js';
const privateKey = process.env.PRIVATE_KEY;
console.log(privateKey)
const wallet = new ethers.Wallet(privateKey);

const provider = new ethers.providers.JsonRpcProvider('https://bsc-testnet.infura.io/v3/63e78a3a0c594e5c8b7babcbe6ac1381'); //
const signer = wallet.connect(provider);


export async function attestByDelegationProxyFee(params) {
    let {
        networkName,
        data,
        attesteraddr,
        receipt,
        signature,
        metamaskprovider,
        type,
        schemaName,
        eventSchemauid,
    } = params;
    const splitsignature = utils.splitSignature(signature);
    const formatSignature = {
        v: splitsignature.v,
        r: splitsignature.r,
        s: splitsignature.s,
    };
    let contract = new ethers.Contract(
        "0x620e84546d71A775A82491e1e527292e94a7165A",
        proxyabi,
        signer
    );
    let tx;
    let schemauid = "0x5f868b117fd34565f3626396ba91ef0c9a607a0e406972655c5137c6d4291af9";
    console.log("get fee")
    const fee = await getFee(networkName, provider);
    console.log( `fee:${fee}`)
    const paramsobj = {
        schema: schemauid,
        data: {
            recipient: receipt,
            expirationTime: 0,
            revocable: true,
            refUID: "0x0000000000000000000000000000000000000000000000000000000000000000",
            data: data,
            value: 0,
        },
        signature: formatSignature,
        attester: attesteraddr,
        deadline: 0,
    };
    try {
        console.log(`paramsobj:${paramsobj}`)
        tx = await contract.attestByDelegation(
            paramsobj,
            {value: fee}
            // { gasPrice: BN.from('20000000000'), gasLimit: BN.from('1000000') }
        );
        console.log(tx);

    } catch (er) {
        console.log('222222eas attestByDelegationProxyFee attest failed', er);
        try {
            tx = await contract.callStatic.attestByDelegation(paramsobj, {
                value: fee,
            });
        } catch (error) {
            console.log('eas attestByDelegationProxyFee caught error:\n', error);
        }
        return;
    }
}

async function getFee(networkName, provider) {
    const abi = ['function fee() public view returns(uint256)'];
    const contract = new ethers.Contract("0x620e84546d71A775A82491e1e527292e94a7165A", abi, provider);
    console.log('get contract=');
    const fee = await contract.fee();
    console.log('get fee=', fee);
    return fee;
}

const params = {
    networkName:"",
    data:"0x00000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000140000000000000000000000000000000000000000000000000000000000000018000000000000000000000000000000000000000000000000000000000000001c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000193fca19ecb429e0a26d3da29dc6919d86765cbc209b4e04ecd0ca35b0fb988b5ea6b48ae550000000000000000000000000000000000000000000000000000000000000006417373657473000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000036f6b780000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001853706f742033302d44617920547261646520566f6c756d65000000000000000000000000000000000000000000000000000000000000000000000000000000043e31303000000000000000000000000000000000000000000000000000000000",
    attesteraddr:"0xe02bD7a6c8aA401189AEBb5Bad755c2610940A73",
    receipt:"0x5DDAbE5dB4cE8eb0A4F5C61e40Ec5EBc46460E9F",
    signature:"0xb17a3939d291ba964ee81777b70494fda5043a3ae9f0377bea5ea2f6c21e4b721540be36b0ede6d3bce90da712116ff88a364d8bf2aaaa30f772a488c1fb88201b",
    metamaskprovider:provider,
    type:"",
    schemaName:"",
    eventSchemauid:"",
}
attestByDelegationProxyFee(params)
