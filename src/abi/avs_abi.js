export const AVS_ABI = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "avs",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "metadataURI",
                "type": "string"
            }
        ],
        "name": "AVSMetadataURIUpdated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "avs",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "enum IAVSDirectory.OperatorAVSRegistrationStatus",
                "name": "status",
                "type": "uint8"
            }
        ],
        "name": "OperatorAVSRegistrationStatusUpdated",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "OPERATOR_AVS_REGISTRATION_TYPEHASH",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "avs",
                "type": "address"
            },
            {
                "internalType": "bytes32",
                "name": "salt",
                "type": "bytes32"
            },
            {
                "internalType": "uint256",
                "name": "expiry",
                "type": "uint256"
            }
        ],
        "name": "calculateOperatorAVSRegistrationDigestHash",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            }
        ],
        "name": "deregisterOperatorFromAVS",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "internalType": "bytes32",
                "name": "salt",
                "type": "bytes32"
            }
        ],
        "name": "operatorSaltIsSpent",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "components": [
                    {
                        "internalType": "bytes",
                        "name": "signature",
                        "type": "bytes"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "salt",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "uint256",
                        "name": "expiry",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct ISignatureUtils.SignatureWithSaltAndExpiry",
                "name": "operatorSignature",
                "type": "tuple"
            }
        ],
        "name": "registerOperatorToAVS",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "metadataURI",
                "type": "string"
            }
        ],
        "name": "updateAVSMetadataURI",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]