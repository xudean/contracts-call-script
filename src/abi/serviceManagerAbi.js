export const serviceManagerAbi = [
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