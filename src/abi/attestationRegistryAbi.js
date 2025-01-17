export const attestationRegistryAbi =[
    {
        "type": "constructor",
        "inputs": [
            {
                "name": "_primusZKTLS",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "_submissionFee",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "_feeRecipient",
                "type": "address",
                "internalType": "address payable"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "addExchangeToParsePath",
        "inputs": [
            {
                "name": "exchange",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "parsePath",
                "type": "string",
                "internalType": "string"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "addUrlToExchange",
        "inputs": [
            {
                "name": "url",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "exchange",
                "type": "string",
                "internalType": "string"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "attestations",
        "inputs": [
            {
                "name": "",
                "type": "bytes32",
                "internalType": "bytes32"
            }
        ],
        "outputs": [
            {
                "name": "attestationId",
                "type": "bytes32",
                "internalType": "bytes32"
            },
            {
                "name": "recipient",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "exchange",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "value",
                "type": "uint32",
                "internalType": "uint32"
            },
            {
                "name": "timestamp",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "attestationsOfAddress",
        "inputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bytes32",
                "internalType": "bytes32"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "cexCheckList",
        "inputs": [
            {
                "name": "",
                "type": "string",
                "internalType": "string"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "string",
                "internalType": "string"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "cexJsonPathList",
        "inputs": [
            {
                "name": "",
                "type": "string",
                "internalType": "string"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "string",
                "internalType": "string"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "feeRecipient",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address payable"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getAttestationByRecipient",
        "inputs": [
            {
                "name": "recipient",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "tuple[]",
                "internalType": "struct Attestation[]",
                "components": [
                    {
                        "name": "attestationId",
                        "type": "bytes32",
                        "internalType": "bytes32"
                    },
                    {
                        "name": "recipient",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "exchange",
                        "type": "string",
                        "internalType": "string"
                    },
                    {
                        "name": "value",
                        "type": "uint32",
                        "internalType": "uint32"
                    },
                    {
                        "name": "timestamp",
                        "type": "uint256",
                        "internalType": "uint256"
                    }
                ]
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "owner",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "removeExchangeToParsePath",
        "inputs": [
            {
                "name": "exchange",
                "type": "string",
                "internalType": "string"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "removeUrlToExchange",
        "inputs": [
            {
                "name": "url",
                "type": "string",
                "internalType": "string"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "renounceOwnership",
        "inputs": [],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "setCexCheckListAndJsonPath",
        "inputs": [
            {
                "name": "_dexUrls",
                "type": "string[]",
                "internalType": "string[]"
            },
            {
                "name": "_dexName",
                "type": "string[]",
                "internalType": "string[]"
            },
            {
                "name": "_jspnPath",
                "type": "string[]",
                "internalType": "string[]"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "setFeeRecipient",
        "inputs": [
            {
                "name": "_feeRecipient",
                "type": "address",
                "internalType": "address payable"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "setPrimusZKTLS",
        "inputs": [
            {
                "name": "_primusZKTLS",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "setSubmissionFee",
        "inputs": [
            {
                "name": "_submissionFee",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "setcexCheckList",
        "inputs": [
            {
                "name": "_dexUrl",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "_dexName",
                "type": "string",
                "internalType": "string"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "submissionFee",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "submitAttestation",
        "inputs": [
            {
                "name": "_attestation",
                "type": "tuple",
                "internalType": "struct Attestation",
                "components": [
                    {
                        "name": "recipient",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "request",
                        "type": "tuple",
                        "internalType": "struct AttNetworkRequest",
                        "components": [
                            {
                                "name": "url",
                                "type": "string",
                                "internalType": "string"
                            },
                            {
                                "name": "header",
                                "type": "string",
                                "internalType": "string"
                            },
                            {
                                "name": "method",
                                "type": "string",
                                "internalType": "string"
                            },
                            {
                                "name": "body",
                                "type": "string",
                                "internalType": "string"
                            }
                        ]
                    },
                    {
                        "name": "reponseResolve",
                        "type": "tuple[]",
                        "internalType": "struct AttNetworkResponseResolve[]",
                        "components": [
                            {
                                "name": "keyName",
                                "type": "string",
                                "internalType": "string"
                            },
                            {
                                "name": "parseType",
                                "type": "string",
                                "internalType": "string"
                            },
                            {
                                "name": "parsePath",
                                "type": "string",
                                "internalType": "string"
                            }
                        ]
                    },
                    {
                        "name": "data",
                        "type": "string",
                        "internalType": "string"
                    },
                    {
                        "name": "attConditions",
                        "type": "string",
                        "internalType": "string"
                    },
                    {
                        "name": "timestamp",
                        "type": "uint64",
                        "internalType": "uint64"
                    },
                    {
                        "name": "additionParams",
                        "type": "string",
                        "internalType": "string"
                    },
                    {
                        "name": "attestors",
                        "type": "tuple[]",
                        "internalType": "struct Attestor[]",
                        "components": [
                            {
                                "name": "attestorAddr",
                                "type": "address",
                                "internalType": "address"
                            },
                            {
                                "name": "url",
                                "type": "string",
                                "internalType": "string"
                            }
                        ]
                    },
                    {
                        "name": "signatures",
                        "type": "bytes[]",
                        "internalType": "bytes[]"
                    }
                ]
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bytes32",
                "internalType": "bytes32"
            }
        ],
        "stateMutability": "payable"
    },
    {
        "type": "function",
        "name": "transferOwnership",
        "inputs": [
            {
                "name": "newOwner",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "event",
        "name": "AttestationSubmitted",
        "inputs": [
            {
                "name": "attestationId",
                "type": "bytes32",
                "indexed": false,
                "internalType": "bytes32"
            },
            {
                "name": "recipient",
                "type": "address",
                "indexed": false,
                "internalType": "address"
            },
            {
                "name": "exchange",
                "type": "string",
                "indexed": false,
                "internalType": "string"
            },
            {
                "name": "value",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            },
            {
                "name": "timestamp",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "ExchangeToParsePathAdded",
        "inputs": [
            {
                "name": "exchange",
                "type": "string",
                "indexed": true,
                "internalType": "string"
            },
            {
                "name": "parsePath",
                "type": "string",
                "indexed": false,
                "internalType": "string"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "ExchangeToParsePathRemoved",
        "inputs": [
            {
                "name": "exchange",
                "type": "string",
                "indexed": true,
                "internalType": "string"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "FeeReceived",
        "inputs": [
            {
                "name": "sender",
                "type": "address",
                "indexed": false,
                "internalType": "address"
            },
            {
                "name": "amount",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "OwnershipTransferred",
        "inputs": [
            {
                "name": "previousOwner",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "newOwner",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "UrlToExchangeAdded",
        "inputs": [
            {
                "name": "url",
                "type": "string",
                "indexed": true,
                "internalType": "string"
            },
            {
                "name": "exchange",
                "type": "string",
                "indexed": false,
                "internalType": "string"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "UrlToExchangeRemoved",
        "inputs": [
            {
                "name": "url",
                "type": "string",
                "indexed": true,
                "internalType": "string"
            }
        ],
        "anonymous": false
    },
    {
        "type": "error",
        "name": "InvalidStringNumber",
        "inputs": [
            {
                "name": "s",
                "type": "string",
                "internalType": "string"
            }
        ]
    },
    {
        "type": "error",
        "name": "OwnableInvalidOwner",
        "inputs": [
            {
                "name": "owner",
                "type": "address",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "error",
        "name": "OwnableUnauthorizedAccount",
        "inputs": [
            {
                "name": "account",
                "type": "address",
                "internalType": "address"
            }
        ]
    }
]