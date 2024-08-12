export const taskMgtAbi =[
    {
        "type": "constructor",
        "inputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "receive",
        "stateMutability": "payable"
    },
    {
        "type": "function",
        "name": "dataMgt",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "contract IDataMgt"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "feeMgt",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "contract IFeeMgt"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getCompletedTaskById",
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
                "type": "tuple",
                "internalType": "struct Task",
                "components": [
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
                        "name": "consumerPk",
                        "type": "bytes",
                        "internalType": "bytes"
                    },
                    {
                        "name": "tokenSymbol",
                        "type": "string",
                        "internalType": "string"
                    },
                    {
                        "name": "dataId",
                        "type": "bytes32",
                        "internalType": "bytes32"
                    },
                    {
                        "name": "dataInfo",
                        "type": "tuple",
                        "internalType": "struct TaskDataInfo",
                        "components": [
                            {
                                "name": "dataEncryptionPk",
                                "type": "bytes",
                                "internalType": "bytes"
                            },
                            {
                                "name": "price",
                                "type": "uint256",
                                "internalType": "uint256"
                            },
                            {
                                "name": "dataProviders",
                                "type": "address[]",
                                "internalType": "address[]"
                            },
                            {
                                "name": "data",
                                "type": "bytes[]",
                                "internalType": "bytes[]"
                            }
                        ]
                    },
                    {
                        "name": "computingInfo",
                        "type": "tuple",
                        "internalType": "struct ComputingInfo",
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
                            },
                            {
                                "name": "workerIds",
                                "type": "bytes32[]",
                                "internalType": "bytes32[]"
                            },
                            {
                                "name": "results",
                                "type": "bytes[]",
                                "internalType": "bytes[]"
                            },
                            {
                                "name": "waitingList",
                                "type": "bytes32[]",
                                "internalType": "bytes32[]"
                            }
                        ]
                    },
                    {
                        "name": "time",
                        "type": "uint64",
                        "internalType": "uint64"
                    },
                    {
                        "name": "status",
                        "type": "uint8",
                        "internalType": "enum TaskStatus"
                    },
                    {
                        "name": "submitter",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "code",
                        "type": "bytes",
                        "internalType": "bytes"
                    }
                ]
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getPendingTasks",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "tuple[]",
                "internalType": "struct Task[]",
                "components": [
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
                        "name": "consumerPk",
                        "type": "bytes",
                        "internalType": "bytes"
                    },
                    {
                        "name": "tokenSymbol",
                        "type": "string",
                        "internalType": "string"
                    },
                    {
                        "name": "dataId",
                        "type": "bytes32",
                        "internalType": "bytes32"
                    },
                    {
                        "name": "dataInfo",
                        "type": "tuple",
                        "internalType": "struct TaskDataInfo",
                        "components": [
                            {
                                "name": "dataEncryptionPk",
                                "type": "bytes",
                                "internalType": "bytes"
                            },
                            {
                                "name": "price",
                                "type": "uint256",
                                "internalType": "uint256"
                            },
                            {
                                "name": "dataProviders",
                                "type": "address[]",
                                "internalType": "address[]"
                            },
                            {
                                "name": "data",
                                "type": "bytes[]",
                                "internalType": "bytes[]"
                            }
                        ]
                    },
                    {
                        "name": "computingInfo",
                        "type": "tuple",
                        "internalType": "struct ComputingInfo",
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
                            },
                            {
                                "name": "workerIds",
                                "type": "bytes32[]",
                                "internalType": "bytes32[]"
                            },
                            {
                                "name": "results",
                                "type": "bytes[]",
                                "internalType": "bytes[]"
                            },
                            {
                                "name": "waitingList",
                                "type": "bytes32[]",
                                "internalType": "bytes32[]"
                            }
                        ]
                    },
                    {
                        "name": "time",
                        "type": "uint64",
                        "internalType": "uint64"
                    },
                    {
                        "name": "status",
                        "type": "uint8",
                        "internalType": "enum TaskStatus"
                    },
                    {
                        "name": "submitter",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "code",
                        "type": "bytes",
                        "internalType": "bytes"
                    }
                ]
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getPendingTasksByWorkerId",
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
                "type": "tuple[]",
                "internalType": "struct Task[]",
                "components": [
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
                        "name": "consumerPk",
                        "type": "bytes",
                        "internalType": "bytes"
                    },
                    {
                        "name": "tokenSymbol",
                        "type": "string",
                        "internalType": "string"
                    },
                    {
                        "name": "dataId",
                        "type": "bytes32",
                        "internalType": "bytes32"
                    },
                    {
                        "name": "dataInfo",
                        "type": "tuple",
                        "internalType": "struct TaskDataInfo",
                        "components": [
                            {
                                "name": "dataEncryptionPk",
                                "type": "bytes",
                                "internalType": "bytes"
                            },
                            {
                                "name": "price",
                                "type": "uint256",
                                "internalType": "uint256"
                            },
                            {
                                "name": "dataProviders",
                                "type": "address[]",
                                "internalType": "address[]"
                            },
                            {
                                "name": "data",
                                "type": "bytes[]",
                                "internalType": "bytes[]"
                            }
                        ]
                    },
                    {
                        "name": "computingInfo",
                        "type": "tuple",
                        "internalType": "struct ComputingInfo",
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
                            },
                            {
                                "name": "workerIds",
                                "type": "bytes32[]",
                                "internalType": "bytes32[]"
                            },
                            {
                                "name": "results",
                                "type": "bytes[]",
                                "internalType": "bytes[]"
                            },
                            {
                                "name": "waitingList",
                                "type": "bytes32[]",
                                "internalType": "bytes32[]"
                            }
                        ]
                    },
                    {
                        "name": "time",
                        "type": "uint64",
                        "internalType": "uint64"
                    },
                    {
                        "name": "status",
                        "type": "uint8",
                        "internalType": "enum TaskStatus"
                    },
                    {
                        "name": "submitter",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "code",
                        "type": "bytes",
                        "internalType": "bytes"
                    }
                ]
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getTaskReportStatus",
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
                "type": "uint8",
                "internalType": "enum TaskReportStatus"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getVersion",
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
        "name": "initialize",
        "inputs": [
            {
                "name": "_dataMgt",
                "type": "address",
                "internalType": "contract IDataMgt"
            },
            {
                "name": "_feeMgt",
                "type": "address",
                "internalType": "contract IFeeMgt"
            },
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
        "name": "renounceOwnership",
        "inputs": [],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "reportResult",
        "inputs": [
            {
                "name": "taskId",
                "type": "bytes32",
                "internalType": "bytes32"
            },
            {
                "name": "workerId",
                "type": "bytes32",
                "internalType": "bytes32"
            },
            {
                "name": "result",
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
        "name": "setDataVerifier",
        "inputs": [
            {
                "name": "taskType",
                "type": "uint8",
                "internalType": "enum TaskType"
            },
            {
                "name": "dataVerifier",
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
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "setResultVerifier",
        "inputs": [
            {
                "name": "taskType",
                "type": "uint8",
                "internalType": "enum TaskType"
            },
            {
                "name": "resultVerifier",
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
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "submitTask",
        "inputs": [
            {
                "name": "taskType",
                "type": "uint8",
                "internalType": "enum TaskType"
            },
            {
                "name": "consumerPk",
                "type": "bytes",
                "internalType": "bytes"
            },
            {
                "name": "tokenSymbol",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "dataInfoRequest",
                "type": "tuple",
                "internalType": "struct TaskDataInfoRequest",
                "components": [
                    {
                        "name": "price",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "dataDescription",
                        "type": "string",
                        "internalType": "string"
                    },
                    {
                        "name": "dataInputAmount",
                        "type": "uint32",
                        "internalType": "uint32"
                    }
                ]
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
            },
            {
                "name": "code",
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
        "stateMutability": "payable"
    },
    {
        "type": "function",
        "name": "submitTask",
        "inputs": [
            {
                "name": "taskType",
                "type": "uint8",
                "internalType": "enum TaskType"
            },
            {
                "name": "consumerPk",
                "type": "bytes",
                "internalType": "bytes"
            },
            {
                "name": "dataId",
                "type": "bytes32",
                "internalType": "bytes32"
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
        "name": "submitTaskData",
        "inputs": [
            {
                "name": "taskId",
                "type": "bytes32",
                "internalType": "bytes32"
            },
            {
                "name": "data",
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
        "name": "taskCount",
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
        "name": "taskTimeout",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint64",
                "internalType": "uint64"
            }
        ],
        "stateMutability": "view"
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
        "name": "updateTask",
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
                "type": "uint8",
                "internalType": "enum TaskStatus"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "updateTaskReportTimeout",
        "inputs": [
            {
                "name": "timeout",
                "type": "uint64",
                "internalType": "uint64"
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
        "name": "ResultReported",
        "inputs": [
            {
                "name": "taskId",
                "type": "bytes32",
                "indexed": true,
                "internalType": "bytes32"
            },
            {
                "name": "worker",
                "type": "address",
                "indexed": false,
                "internalType": "address"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "TaskCompleted",
        "inputs": [
            {
                "name": "taskId",
                "type": "bytes32",
                "indexed": true,
                "internalType": "bytes32"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "TaskDispatched",
        "inputs": [
            {
                "name": "taskId",
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
        "name": "TaskFailed",
        "inputs": [
            {
                "name": "taskId",
                "type": "bytes32",
                "indexed": true,
                "internalType": "bytes32"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "TaskReportTimeoutUpdated",
        "inputs": [
            {
                "name": "timeout",
                "type": "uint64",
                "indexed": false,
                "internalType": "uint64"
            }
        ],
        "anonymous": false
    }
]