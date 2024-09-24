export const workerMgtAbi =[
    {
        "type": "constructor",
        "inputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "addWhiteListItem",
        "inputs": [
            {
                "name": "_address",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "checkWorkerRegistered",
        "inputs": [
            {
                "name": "_workerId",
                "type": "bytes32",
                "internalType": "bytes32"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "dataMgtAddr",
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
        "name": "delegate",
        "inputs": [
            {
                "name": "workerId",
                "type": "bytes32",
                "internalType": "bytes32"
            },
            {
                "name": "delegateAmount",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "payable"
    },
    {
        "type": "function",
        "name": "deleteWorker",
        "inputs": [
            {
                "name": "name",
                "type": "string",
                "internalType": "string"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "deregisterOperator",
        "inputs": [
            {
                "name": "quorumNumbers",
                "type": "bytes",
                "internalType": "bytes"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "getDelegatorsByWorker",
        "inputs": [
            {
                "name": "workerId",
                "type": "bytes32",
                "internalType": "bytes32"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "address[]",
                "internalType": "address[]"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getMultiplePublicKeyWorkers",
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
                "type": "bytes32[]",
                "internalType": "bytes32[]"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getTaskEncryptionPublicKey",
        "inputs": [
            {
                "name": "taskId",
                "type": "bytes32",
                "internalType": "bytes32"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bytes",
                "internalType": "bytes"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getTaskWorkers",
        "inputs": [
            {
                "name": "taskId",
                "type": "bytes32",
                "internalType": "bytes32"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bytes32[]",
                "internalType": "bytes32[]"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getWorkerById",
        "inputs": [
            {
                "name": "workerId",
                "type": "bytes32",
                "internalType": "bytes32"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "tuple",
                "internalType": "struct Worker",
                "components": [
                    {
                        "name": "workerId",
                        "type": "bytes32",
                        "internalType": "bytes32"
                    },
                    {
                        "name": "workerType",
                        "type": "uint8",
                        "internalType": "enum WorkerType"
                    },
                    {
                        "name": "name",
                        "type": "string",
                        "internalType": "string"
                    },
                    {
                        "name": "desc",
                        "type": "string",
                        "internalType": "string"
                    },
                    {
                        "name": "stakeAmount",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "owner",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "publicKey",
                        "type": "bytes",
                        "internalType": "bytes"
                    },
                    {
                        "name": "time",
                        "type": "uint64",
                        "internalType": "uint64"
                    },
                    {
                        "name": "status",
                        "type": "uint8",
                        "internalType": "enum WorkerStatus"
                    },
                    {
                        "name": "sucTasksAmount",
                        "type": "uint64",
                        "internalType": "uint64"
                    },
                    {
                        "name": "failTasksAmount",
                        "type": "uint64",
                        "internalType": "uint64"
                    },
                    {
                        "name": "delegationAmount",
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
        "name": "getWorkerByName",
        "inputs": [
            {
                "name": "workerName",
                "type": "string",
                "internalType": "string"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "tuple",
                "internalType": "struct Worker",
                "components": [
                    {
                        "name": "workerId",
                        "type": "bytes32",
                        "internalType": "bytes32"
                    },
                    {
                        "name": "workerType",
                        "type": "uint8",
                        "internalType": "enum WorkerType"
                    },
                    {
                        "name": "name",
                        "type": "string",
                        "internalType": "string"
                    },
                    {
                        "name": "desc",
                        "type": "string",
                        "internalType": "string"
                    },
                    {
                        "name": "stakeAmount",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "owner",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "publicKey",
                        "type": "bytes",
                        "internalType": "bytes"
                    },
                    {
                        "name": "time",
                        "type": "uint64",
                        "internalType": "uint64"
                    },
                    {
                        "name": "status",
                        "type": "uint8",
                        "internalType": "enum WorkerStatus"
                    },
                    {
                        "name": "sucTasksAmount",
                        "type": "uint64",
                        "internalType": "uint64"
                    },
                    {
                        "name": "failTasksAmount",
                        "type": "uint64",
                        "internalType": "uint64"
                    },
                    {
                        "name": "delegationAmount",
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
        "name": "getWorkers",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "tuple[]",
                "internalType": "struct Worker[]",
                "components": [
                    {
                        "name": "workerId",
                        "type": "bytes32",
                        "internalType": "bytes32"
                    },
                    {
                        "name": "workerType",
                        "type": "uint8",
                        "internalType": "enum WorkerType"
                    },
                    {
                        "name": "name",
                        "type": "string",
                        "internalType": "string"
                    },
                    {
                        "name": "desc",
                        "type": "string",
                        "internalType": "string"
                    },
                    {
                        "name": "stakeAmount",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "owner",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "publicKey",
                        "type": "bytes",
                        "internalType": "bytes"
                    },
                    {
                        "name": "time",
                        "type": "uint64",
                        "internalType": "uint64"
                    },
                    {
                        "name": "status",
                        "type": "uint8",
                        "internalType": "enum WorkerStatus"
                    },
                    {
                        "name": "sucTasksAmount",
                        "type": "uint64",
                        "internalType": "uint64"
                    },
                    {
                        "name": "failTasksAmount",
                        "type": "uint64",
                        "internalType": "uint64"
                    },
                    {
                        "name": "delegationAmount",
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
        "name": "getWorkersByDelegator",
        "inputs": [
            {
                "name": "delegator",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bytes32[]",
                "internalType": "bytes32[]"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getWorkersByIds",
        "inputs": [
            {
                "name": "workerids",
                "type": "bytes32[]",
                "internalType": "bytes32[]"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "tuple[]",
                "internalType": "struct Worker[]",
                "components": [
                    {
                        "name": "workerId",
                        "type": "bytes32",
                        "internalType": "bytes32"
                    },
                    {
                        "name": "workerType",
                        "type": "uint8",
                        "internalType": "enum WorkerType"
                    },
                    {
                        "name": "name",
                        "type": "string",
                        "internalType": "string"
                    },
                    {
                        "name": "desc",
                        "type": "string",
                        "internalType": "string"
                    },
                    {
                        "name": "stakeAmount",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "owner",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "publicKey",
                        "type": "bytes",
                        "internalType": "bytes"
                    },
                    {
                        "name": "time",
                        "type": "uint64",
                        "internalType": "uint64"
                    },
                    {
                        "name": "status",
                        "type": "uint8",
                        "internalType": "enum WorkerStatus"
                    },
                    {
                        "name": "sucTasksAmount",
                        "type": "uint64",
                        "internalType": "uint64"
                    },
                    {
                        "name": "failTasksAmount",
                        "type": "uint64",
                        "internalType": "uint64"
                    },
                    {
                        "name": "delegationAmount",
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
        "name": "initialize",
        "inputs": [
            {
                "name": "_registryCoordinator",
                "type": "address",
                "internalType": "contract PADORegistryCoordinator"
            },
            {
                "name": "_dataMgtAddr",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "networkOwner",
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
        "name": "register",
        "inputs": [
            {
                "name": "name",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "desc",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "taskTypes",
                "type": "uint8[]",
                "internalType": "enum TaskType[]"
            },
            {
                "name": "publicKey",
                "type": "bytes[]",
                "internalType": "bytes[]"
            },
            {
                "name": "stakeAmount",
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
        "stateMutability": "payable"
    },
    {
        "type": "function",
        "name": "registerEigenOperator",
        "inputs": [
            {
                "name": "taskTypes",
                "type": "uint8[]",
                "internalType": "enum TaskType[]"
            },
            {
                "name": "publicKey",
                "type": "bytes[]",
                "internalType": "bytes[]"
            },
            {
                "name": "quorumNumbers",
                "type": "bytes",
                "internalType": "bytes"
            },
            {
                "name": "socket",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "params",
                "type": "tuple",
                "internalType": "struct IBLSApkRegistry.PubkeyRegistrationParams",
                "components": [
                    {
                        "name": "pubkeyRegistrationSignature",
                        "type": "tuple",
                        "internalType": "struct BN254.G1Point",
                        "components": [
                            {
                                "name": "X",
                                "type": "uint256",
                                "internalType": "uint256"
                            },
                            {
                                "name": "Y",
                                "type": "uint256",
                                "internalType": "uint256"
                            }
                        ]
                    },
                    {
                        "name": "pubkeyG1",
                        "type": "tuple",
                        "internalType": "struct BN254.G1Point",
                        "components": [
                            {
                                "name": "X",
                                "type": "uint256",
                                "internalType": "uint256"
                            },
                            {
                                "name": "Y",
                                "type": "uint256",
                                "internalType": "uint256"
                            }
                        ]
                    },
                    {
                        "name": "pubkeyG2",
                        "type": "tuple",
                        "internalType": "struct BN254.G2Point",
                        "components": [
                            {
                                "name": "X",
                                "type": "uint256[2]",
                                "internalType": "uint256[2]"
                            },
                            {
                                "name": "Y",
                                "type": "uint256[2]",
                                "internalType": "uint256[2]"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "operatorSignature",
                "type": "tuple",
                "internalType": "struct ISignatureUtils.SignatureWithSaltAndExpiry",
                "components": [
                    {
                        "name": "signature",
                        "type": "bytes",
                        "internalType": "bytes"
                    },
                    {
                        "name": "salt",
                        "type": "bytes32",
                        "internalType": "bytes32"
                    },
                    {
                        "name": "expiry",
                        "type": "uint256",
                        "internalType": "uint256"
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
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "registryCoordinator",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "contract PADORegistryCoordinator"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "removeWhiteListItem",
        "inputs": [
            {
                "name": "_address",
                "type": "address",
                "internalType": "address"
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
        "name": "selectMultiplePublicKeyWorkers",
        "inputs": [
            {
                "name": "dataId",
                "type": "bytes32",
                "internalType": "bytes32"
            },
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
        ],
        "outputs": [
            {
                "name": "",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "selectTaskWorkers",
        "inputs": [
            {
                "name": "taskId",
                "type": "bytes32",
                "internalType": "bytes32"
            },
            {
                "name": "taskType",
                "type": "uint8",
                "internalType": "enum TaskType"
            },
            {
                "name": "computingInfoRequest",
                "type": "tuple",
                "internalType": "struct ComputingInfoRequest",
                "components": [
                    {
                        "name": "price",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
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
                "name": "",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "setDataMgtAddr",
        "inputs": [
            {
                "name": "_dataMgtAddr",
                "type": "address",
                "internalType": "address"
            }
        ],
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
        "name": "unDelegate",
        "inputs": [
            {
                "name": "workerId",
                "type": "bytes32",
                "internalType": "bytes32"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "update",
        "inputs": [
            {
                "name": "name",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "desc",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "taskTypes",
                "type": "uint8[]",
                "internalType": "enum TaskType[]"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "version",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "pure"
    },
    {
        "type": "function",
        "name": "workerIds",
        "inputs": [
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
        "name": "workerWhiteList",
        "inputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "workers",
        "inputs": [
            {
                "name": "",
                "type": "bytes32",
                "internalType": "bytes32"
            }
        ],
        "outputs": [
            {
                "name": "workerId",
                "type": "bytes32",
                "internalType": "bytes32"
            },
            {
                "name": "workerType",
                "type": "uint8",
                "internalType": "enum WorkerType"
            },
            {
                "name": "name",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "desc",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "stakeAmount",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "owner",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "publicKey",
                "type": "bytes",
                "internalType": "bytes"
            },
            {
                "name": "time",
                "type": "uint64",
                "internalType": "uint64"
            },
            {
                "name": "status",
                "type": "uint8",
                "internalType": "enum WorkerStatus"
            },
            {
                "name": "sucTasksAmount",
                "type": "uint64",
                "internalType": "uint64"
            },
            {
                "name": "failTasksAmount",
                "type": "uint64",
                "internalType": "uint64"
            },
            {
                "name": "delegationAmount",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "workersToEncryptData",
        "inputs": [
            {
                "name": "",
                "type": "bytes32",
                "internalType": "bytes32"
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
    },
    {
        "type": "event",
        "name": "SelectDataWorkers",
        "inputs": [
            {
                "name": "dataId",
                "type": "bytes32",
                "indexed": true,
                "internalType": "bytes32"
            },
            {
                "name": "workerIds",
                "type": "bytes32[]",
                "indexed": false,
                "internalType": "bytes32[]"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "WorkerRegistry",
        "inputs": [
            {
                "name": "workerId",
                "type": "bytes32",
                "indexed": true,
                "internalType": "bytes32"
            },
            {
                "name": "workerType",
                "type": "uint8",
                "indexed": false,
                "internalType": "enum WorkerType"
            },
            {
                "name": "owner",
                "type": "address",
                "indexed": false,
                "internalType": "address"
            }
        ],
        "anonymous": false
    }
]