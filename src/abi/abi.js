export const ABI = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_avsDirectory",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_stakeRegistry",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_delegationManager",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint8",
                "name": "version",
                "type": "uint8"
            }
        ],
        "name": "Initialized",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "Initialized",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint32",
                "name": "taskIndex",
                "type": "uint32"
            },
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "uint32",
                        "name": "taskCreatedBlock",
                        "type": "uint32"
                    }
                ],
                "indexed": false,
                "internalType": "struct IHelloWorldServiceManager.Task",
                "name": "task",
                "type": "tuple"
            }
        ],
        "name": "NewTaskCreated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "newPausedStatus",
                "type": "uint256"
            }
        ],
        "name": "Paused",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "contract IPauserRegistry",
                "name": "pauserRegistry",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "contract IPauserRegistry",
                "name": "newPauserRegistry",
                "type": "address"
            }
        ],
        "name": "PauserRegistrySet",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "prevRewardsInitiator",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "newRewardsInitiator",
                "type": "address"
            }
        ],
        "name": "RewardsInitiatorUpdated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint32",
                "name": "taskIndex",
                "type": "uint32"
            },
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "uint32",
                        "name": "taskCreatedBlock",
                        "type": "uint32"
                    }
                ],
                "indexed": false,
                "internalType": "struct IHelloWorldServiceManager.Task",
                "name": "task",
                "type": "tuple"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "operator",
                "type": "address"
            }
        ],
        "name": "TaskResponded",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "newPausedStatus",
                "type": "uint256"
            }
        ],
        "name": "Unpaused",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "uint32",
                "name": "",
                "type": "uint32"
            }
        ],
        "name": "allTaskHashes",
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
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint32",
                "name": "",
                "type": "uint32"
            }
        ],
        "name": "allTaskResponses",
        "outputs": [
            {
                "internalType": "bytes",
                "name": "",
                "type": "bytes"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "avsDirectory",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "components": [
                            {
                                "internalType": "contract IStrategy",
                                "name": "strategy",
                                "type": "address"
                            },
                            {
                                "internalType": "uint96",
                                "name": "multiplier",
                                "type": "uint96"
                            }
                        ],
                        "internalType": "struct IRewardsCoordinator.StrategyAndMultiplier[]",
                        "name": "strategiesAndMultipliers",
                        "type": "tuple[]"
                    },
                    {
                        "internalType": "contract IERC20",
                        "name": "token",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint32",
                        "name": "startTimestamp",
                        "type": "uint32"
                    },
                    {
                        "internalType": "uint32",
                        "name": "duration",
                        "type": "uint32"
                    }
                ],
                "internalType": "struct IRewardsCoordinator.RewardsSubmission[]",
                "name": "rewardsSubmissions",
                "type": "tuple[]"
            }
        ],
        "name": "createAVSRewardsSubmission",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            }
        ],
        "name": "createNewTask",
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
            }
        ],
        "name": "deregisterOperatorFromAVS",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getAvsDirectory",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getDelegationManager",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_operator",
                "type": "address"
            }
        ],
        "name": "getOperatorRestakedStrategies",
        "outputs": [
            {
                "internalType": "address[]",
                "name": "",
                "type": "address[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getRestakeableStrategies",
        "outputs": [
            {
                "internalType": "address[]",
                "name": "",
                "type": "address[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getStakeRegistry",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "initialize",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "latestTaskNum",
        "outputs": [
            {
                "internalType": "uint32",
                "name": "",
                "type": "uint32"
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
        "name": "operatorHasMinimumWeight",
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
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "newPausedStatus",
                "type": "uint256"
            }
        ],
        "name": "pause",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "pauseAll",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint8",
                "name": "index",
                "type": "uint8"
            }
        ],
        "name": "paused",
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
        "inputs": [],
        "name": "paused",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "pauserRegistry",
        "outputs": [
            {
                "internalType": "contract IPauserRegistry",
                "name": "",
                "type": "address"
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
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "uint32",
                        "name": "taskCreatedBlock",
                        "type": "uint32"
                    }
                ],
                "internalType": "struct IHelloWorldServiceManager.Task",
                "name": "task",
                "type": "tuple"
            },
            {
                "internalType": "uint32",
                "name": "referenceTaskIndex",
                "type": "uint32"
            },
            {
                "internalType": "bytes",
                "name": "signature",
                "type": "bytes"
            }
        ],
        "name": "respondToTask",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "rewardsInitiator",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "contract IPauserRegistry",
                "name": "newPauserRegistry",
                "type": "address"
            }
        ],
        "name": "setPauserRegistry",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newRewardsInitiator",
                "type": "address"
            }
        ],
        "name": "setRewardsInitiator",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "stakeRegistry",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "newPausedStatus",
                "type": "uint256"
            }
        ],
        "name": "unpause",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_metadataURI",
                "type": "string"
            }
        ],
        "name": "updateAVSMetadataURI",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]