export const rewardsCoordinatorAbi = [
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
                "indexed": true,
                "internalType": "uint256",
                "name": "submissionNonce",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "rewardsSubmissionHash",
                "type": "bytes32"
            },
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
                "indexed": false,
                "internalType": "struct IRewardsCoordinator.RewardsSubmission",
                "name": "rewardsSubmission",
                "type": "tuple"
            }
        ],
        "name": "AVSRewardsSubmissionCreated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint32",
                "name": "oldActivationDelay",
                "type": "uint32"
            },
            {
                "indexed": false,
                "internalType": "uint32",
                "name": "newActivationDelay",
                "type": "uint32"
            }
        ],
        "name": "ActivationDelaySet",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "earner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "oldClaimer",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "claimer",
                "type": "address"
            }
        ],
        "name": "ClaimerForSet",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint32",
                "name": "rootIndex",
                "type": "uint32"
            },
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "root",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "uint32",
                "name": "rewardsCalculationEndTimestamp",
                "type": "uint32"
            },
            {
                "indexed": false,
                "internalType": "uint32",
                "name": "activatedAt",
                "type": "uint32"
            }
        ],
        "name": "DistributionRootSubmitted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint16",
                "name": "oldGlobalCommissionBips",
                "type": "uint16"
            },
            {
                "indexed": false,
                "internalType": "uint16",
                "name": "newGlobalCommissionBips",
                "type": "uint16"
            }
        ],
        "name": "GlobalCommissionBipsSet",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "bytes32",
                "name": "root",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "earner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "claimer",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "recipient",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "contract IERC20",
                "name": "token",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "claimedAmount",
                "type": "uint256"
            }
        ],
        "name": "RewardsClaimed",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "rewardsForAllSubmitter",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "bool",
                "name": "oldValue",
                "type": "bool"
            },
            {
                "indexed": true,
                "internalType": "bool",
                "name": "newValue",
                "type": "bool"
            }
        ],
        "name": "RewardsForAllSubmitterSet",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "submitter",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "submissionNonce",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "rewardsSubmissionHash",
                "type": "bytes32"
            },
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
                "indexed": false,
                "internalType": "struct IRewardsCoordinator.RewardsSubmission",
                "name": "rewardsSubmission",
                "type": "tuple"
            }
        ],
        "name": "RewardsSubmissionForAllCreated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "oldRewardsUpdater",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newRewardsUpdater",
                "type": "address"
            }
        ],
        "name": "RewardsUpdaterSet",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "CALCULATION_INTERVAL_SECONDS",
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
        "inputs": [],
        "name": "GENESIS_REWARDS_TIMESTAMP",
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
        "inputs": [],
        "name": "MAX_FUTURE_LENGTH",
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
        "inputs": [],
        "name": "MAX_RETROACTIVE_LENGTH",
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
        "inputs": [],
        "name": "MAX_REWARDS_DURATION",
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
        "inputs": [],
        "name": "activationDelay",
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
                "components": [
                    {
                        "internalType": "address",
                        "name": "earner",
                        "type": "address"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "earnerTokenRoot",
                        "type": "bytes32"
                    }
                ],
                "internalType": "struct IRewardsCoordinator.EarnerTreeMerkleLeaf",
                "name": "leaf",
                "type": "tuple"
            }
        ],
        "name": "calculateEarnerLeafHash",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "contract IERC20",
                        "name": "token",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "cumulativeEarnings",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct IRewardsCoordinator.TokenTreeMerkleLeaf",
                "name": "leaf",
                "type": "tuple"
            }
        ],
        "name": "calculateTokenLeafHash",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "uint32",
                        "name": "rootIndex",
                        "type": "uint32"
                    },
                    {
                        "internalType": "uint32",
                        "name": "earnerIndex",
                        "type": "uint32"
                    },
                    {
                        "internalType": "bytes",
                        "name": "earnerTreeProof",
                        "type": "bytes"
                    },
                    {
                        "components": [
                            {
                                "internalType": "address",
                                "name": "earner",
                                "type": "address"
                            },
                            {
                                "internalType": "bytes32",
                                "name": "earnerTokenRoot",
                                "type": "bytes32"
                            }
                        ],
                        "internalType": "struct IRewardsCoordinator.EarnerTreeMerkleLeaf",
                        "name": "earnerLeaf",
                        "type": "tuple"
                    },
                    {
                        "internalType": "uint32[]",
                        "name": "tokenIndices",
                        "type": "uint32[]"
                    },
                    {
                        "internalType": "bytes[]",
                        "name": "tokenTreeProofs",
                        "type": "bytes[]"
                    },
                    {
                        "components": [
                            {
                                "internalType": "contract IERC20",
                                "name": "token",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "cumulativeEarnings",
                                "type": "uint256"
                            }
                        ],
                        "internalType": "struct IRewardsCoordinator.TokenTreeMerkleLeaf[]",
                        "name": "tokenLeaves",
                        "type": "tuple[]"
                    }
                ],
                "internalType": "struct IRewardsCoordinator.RewardsMerkleClaim",
                "name": "claim",
                "type": "tuple"
            }
        ],
        "name": "checkClaim",
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
                "name": "earner",
                "type": "address"
            }
        ],
        "name": "claimerFor",
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
                "name": "rewardsSubmission",
                "type": "tuple[]"
            }
        ],
        "name": "createRewardsForAllSubmission",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "claimer",
                "type": "address"
            },
            {
                "internalType": "contract IERC20",
                "name": "token",
                "type": "address"
            }
        ],
        "name": "cumulativeClaimed",
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
        "name": "currRewardsCalculationEndTimestamp",
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
        "inputs": [],
        "name": "getDistributionRootsLength",
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
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "rootHash",
                "type": "bytes32"
            }
        ],
        "name": "getRootIndexFromHash",
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
        "inputs": [],
        "name": "globalOperatorCommissionBips",
        "outputs": [
            {
                "internalType": "uint16",
                "name": "",
                "type": "uint16"
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
            }
        ],
        "name": "operatorCommissionBips",
        "outputs": [
            {
                "internalType": "uint16",
                "name": "",
                "type": "uint16"
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
                        "internalType": "uint32",
                        "name": "rootIndex",
                        "type": "uint32"
                    },
                    {
                        "internalType": "uint32",
                        "name": "earnerIndex",
                        "type": "uint32"
                    },
                    {
                        "internalType": "bytes",
                        "name": "earnerTreeProof",
                        "type": "bytes"
                    },
                    {
                        "components": [
                            {
                                "internalType": "address",
                                "name": "earner",
                                "type": "address"
                            },
                            {
                                "internalType": "bytes32",
                                "name": "earnerTokenRoot",
                                "type": "bytes32"
                            }
                        ],
                        "internalType": "struct IRewardsCoordinator.EarnerTreeMerkleLeaf",
                        "name": "earnerLeaf",
                        "type": "tuple"
                    },
                    {
                        "internalType": "uint32[]",
                        "name": "tokenIndices",
                        "type": "uint32[]"
                    },
                    {
                        "internalType": "bytes[]",
                        "name": "tokenTreeProofs",
                        "type": "bytes[]"
                    },
                    {
                        "components": [
                            {
                                "internalType": "contract IERC20",
                                "name": "token",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "cumulativeEarnings",
                                "type": "uint256"
                            }
                        ],
                        "internalType": "struct IRewardsCoordinator.TokenTreeMerkleLeaf[]",
                        "name": "tokenLeaves",
                        "type": "tuple[]"
                    }
                ],
                "internalType": "struct IRewardsCoordinator.RewardsMerkleClaim",
                "name": "claim",
                "type": "tuple"
            },
            {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
            }
        ],
        "name": "processClaim",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "rewardsUpdater",
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
                "internalType": "uint32",
                "name": "_activationDelay",
                "type": "uint32"
            }
        ],
        "name": "setActivationDelay",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "claimer",
                "type": "address"
            }
        ],
        "name": "setClaimerFor",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "_globalCommissionBips",
                "type": "uint16"
            }
        ],
        "name": "setGlobalOperatorCommission",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_submitter",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "_newValue",
                "type": "bool"
            }
        ],
        "name": "setRewardsForAllSubmitter",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_rewardsUpdater",
                "type": "address"
            }
        ],
        "name": "setRewardsUpdater",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "root",
                "type": "bytes32"
            },
            {
                "internalType": "uint32",
                "name": "rewardsCalculationEndTimestamp",
                "type": "uint32"
            }
        ],
        "name": "submitRoot",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]