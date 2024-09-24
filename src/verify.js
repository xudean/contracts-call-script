import {data} from "./rsp.js";
import {verifyTypedData} from "ethers/lib/utils.js";

const dataRsp = data;

const rsp  = verifyTypedData(dataRsp.result.eip712MessageRawDataWithSignature.domain,
    dataRsp.result.eip712MessageRawDataWithSignature.types,
    dataRsp.result.eip712MessageRawDataWithSignature.message,
    dataRsp.result.eip712MessageRawDataWithSignature.signature)
console.log(rsp)
