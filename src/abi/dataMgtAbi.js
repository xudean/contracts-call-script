export const dataMgtAbi =  [
    {
        "type": "constructor",
        "inputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "deleteDataById",
        "inputs": [
            {
                "name": "dataId",
                "type": "bytes32",
                "internalType": "bytes32"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "getDataById",
        "inputs": [
            {
                "name": "dataId",
                "type": "bytes32",
                "internalType": "bytes32"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "tuple",
                "internalType": "struct DataInfo",
                "components": [
                    {
                        "name": "dataId",
                        "type": "bytes32",
                        "internalType": "bytes32"
                    },
                    {
                        "name": "dataTag",
                        "type": "string",
                        "internalType": "string"
                    },
                    {
                        "name": "priceInfo",
                        "type": "tuple",
                        "internalType": "struct PriceInfo",
                        "components": [
                            {
                                "name": "tokenSymbol",
                                "type": "string",
                                "internalType": "string"
                            },
                            {
                                "name": "price",
                                "type": "uint256",
                                "internalType": "uint256"
                            }
                        ]
                    },
                    {
                        "name": "dataContent",
                        "type": "bytes",
                        "internalType": "bytes"
                    },
                    {
                        "name": "encryptionSchema",
                        "type": "tuple",
                        "internalType": "struct EncryptionSchema",
                        "components": [
                            {
                                "name": "t",
                                "type": "uint32",
                                "internalType": "uint32"
                            },
                            {
                                "name": "n",
                                "type": "uint32",
                                "internalType": "uint32"
                            }
                        ]
                    },
                    {
                        "name": "workerIds",
                        "type": "bytes32[]",
                        "internalType": "bytes32[]"
                    },
                    {
                        "name": "registeredTimestamp",
                        "type": "uint64",
                        "internalType": "uint64"
                    },
                    {
                        "name": "owner",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "status",
                        "type": "uint8",
                        "internalType": "enum DataStatus"
                    }
                ]
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getDataByOwner",
        "inputs": [
            {
                "name": "owner",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "tuple[]",
                "internalType": "struct DataInfo[]",
                "components": [
                    {
                        "name": "dataId",
                        "type": "bytes32",
                        "internalType": "bytes32"
                    },
                    {
                        "name": "dataTag",
                        "type": "string",
                        "internalType": "string"
                    },
                    {
                        "name": "priceInfo",
                        "type": "tuple",
                        "internalType": "struct PriceInfo",
                        "components": [
                            {
                                "name": "tokenSymbol",
                                "type": "string",
                                "internalType": "string"
                            },
                            {
                                "name": "price",
                                "type": "uint256",
                                "internalType": "uint256"
                            }
                        ]
                    },
                    {
                        "name": "dataContent",
                        "type": "bytes",
                        "internalType": "bytes"
                    },
                    {
                        "name": "encryptionSchema",
                        "type": "tuple",
                        "internalType": "struct EncryptionSchema",
                        "components": [
                            {
                                "name": "t",
                                "type": "uint32",
                                "internalType": "uint32"
                            },
                            {
                                "name": "n",
                                "type": "uint32",
                                "internalType": "uint32"
                            }
                        ]
                    },
                    {
                        "name": "workerIds",
                        "type": "bytes32[]",
                        "internalType": "bytes32[]"
                    },
                    {
                        "name": "registeredTimestamp",
                        "type": "uint64",
                        "internalType": "uint64"
                    },
                    {
                        "name": "owner",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "status",
                        "type": "uint8",
                        "internalType": "enum DataStatus"
                    }
                ]
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "initialize",
        "inputs": [
            {
                "name": "_workerMgt",
                "type": "address",
                "internalType": "contract IWorkerMgt"
            },
            {
                "name": "contractOwner",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
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
        "name": "prepareRegistry",
        "inputs": [
            {
                "name": "encryptionSchema",
                "type": "tuple",
                "internalType": "struct EncryptionSchema",
                "components": [
                    {
                        "name": "t",
                        "type": "uint32",
                        "internalType": "uint32"
                    },
                    {
                        "name": "n",
                        "type": "uint32",
                        "internalType": "uint32"
                    }
                ]
            }
        ],
        "outputs": [
            {
                "name": "dataId",
                "type": "bytes32",
                "internalType": "bytes32"
            },
            {
                "name": "publicKeys",
                "type": "bytes[]",
                "internalType": "bytes[]"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "register",
        "inputs": [
            {
                "name": "dataId",
                "type": "bytes32",
                "internalType": "bytes32"
            },
            {
                "name": "dataTag",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "priceInfo",
                "type": "tuple",
                "internalType": "struct PriceInfo",
                "components": [
                    {
                        "name": "tokenSymbol",
                        "type": "string",
                        "internalType": "string"
                    },
                    {
                        "name": "price",
                        "type": "uint256",
                        "internalType": "uint256"
                    }
                ]
            },
            {
                "name": "dataContent",
                "type": "bytes",
                "internalType": "bytes"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bytes32",
                "internalType": "bytes32"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "registryCount",
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
        "name": "renounceOwnership",
        "inputs": [],
        "outputs": [],
        "stateMutability": "nonpayable"
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
        "type": "function",
        "name": "workerMgt",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "contract IWorkerMgt"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "event",
        "name": "DataDeleted",
        "inputs": [
            {
                "name": "dataId",
                "type": "bytes32",
                "indexed": true,
                "internalType": "bytes32"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "DataPrepareRegistry",
        "inputs": [
            {
                "name": "dataId",
                "type": "bytes32",
                "indexed": true,
                "internalType": "bytes32"
            },
            {
                "name": "publicKeys",
                "type": "bytes[]",
                "indexed": false,
                "internalType": "bytes[]"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "DataRegistered",
        "inputs": [
            {
                "name": "dataId",
                "type": "bytes32",
                "indexed": true,
                "internalType": "bytes32"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "Initialized",
        "inputs": [
            {
                "name": "version",
                "type": "uint8",
                "indexed": false,
                "internalType": "uint8"
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
    }
]