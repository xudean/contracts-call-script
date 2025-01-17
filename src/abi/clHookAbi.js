export const clHookAbi = [
    {
        "type": "constructor",
        "inputs": [
            {
                "name": "_poolManager",
                "type": "address",
                "internalType": "contract ICLPoolManager"
            },
            {
                "name": "_attestationRegistry",
                "type": "address",
                "internalType": "contract IAttestationRegistry"
            },
            {
                "name": "initialOwner",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "afterAddLiquidity",
        "inputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "",
                "type": "tuple",
                "internalType": "struct PoolKey",
                "components": [
                    {
                        "name": "currency0",
                        "type": "address",
                        "internalType": "Currency"
                    },
                    {
                        "name": "currency1",
                        "type": "address",
                        "internalType": "Currency"
                    },
                    {
                        "name": "hooks",
                        "type": "address",
                        "internalType": "contract IHooks"
                    },
                    {
                        "name": "poolManager",
                        "type": "address",
                        "internalType": "contract IPoolManager"
                    },
                    {
                        "name": "fee",
                        "type": "uint24",
                        "internalType": "uint24"
                    },
                    {
                        "name": "parameters",
                        "type": "bytes32",
                        "internalType": "bytes32"
                    }
                ]
            },
            {
                "name": "",
                "type": "tuple",
                "internalType": "struct ICLPoolManager.ModifyLiquidityParams",
                "components": [
                    {
                        "name": "tickLower",
                        "type": "int24",
                        "internalType": "int24"
                    },
                    {
                        "name": "tickUpper",
                        "type": "int24",
                        "internalType": "int24"
                    },
                    {
                        "name": "liquidityDelta",
                        "type": "int256",
                        "internalType": "int256"
                    },
                    {
                        "name": "salt",
                        "type": "bytes32",
                        "internalType": "bytes32"
                    }
                ]
            },
            {
                "name": "",
                "type": "int256",
                "internalType": "BalanceDelta"
            },
            {
                "name": "",
                "type": "int256",
                "internalType": "BalanceDelta"
            },
            {
                "name": "",
                "type": "bytes",
                "internalType": "bytes"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bytes4",
                "internalType": "bytes4"
            },
            {
                "name": "",
                "type": "int256",
                "internalType": "BalanceDelta"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "afterDonate",
        "inputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "",
                "type": "tuple",
                "internalType": "struct PoolKey",
                "components": [
                    {
                        "name": "currency0",
                        "type": "address",
                        "internalType": "Currency"
                    },
                    {
                        "name": "currency1",
                        "type": "address",
                        "internalType": "Currency"
                    },
                    {
                        "name": "hooks",
                        "type": "address",
                        "internalType": "contract IHooks"
                    },
                    {
                        "name": "poolManager",
                        "type": "address",
                        "internalType": "contract IPoolManager"
                    },
                    {
                        "name": "fee",
                        "type": "uint24",
                        "internalType": "uint24"
                    },
                    {
                        "name": "parameters",
                        "type": "bytes32",
                        "internalType": "bytes32"
                    }
                ]
            },
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "",
                "type": "bytes",
                "internalType": "bytes"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bytes4",
                "internalType": "bytes4"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "afterInitialize",
        "inputs": [
            {
                "name": "sender",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "key",
                "type": "tuple",
                "internalType": "struct PoolKey",
                "components": [
                    {
                        "name": "currency0",
                        "type": "address",
                        "internalType": "Currency"
                    },
                    {
                        "name": "currency1",
                        "type": "address",
                        "internalType": "Currency"
                    },
                    {
                        "name": "hooks",
                        "type": "address",
                        "internalType": "contract IHooks"
                    },
                    {
                        "name": "poolManager",
                        "type": "address",
                        "internalType": "contract IPoolManager"
                    },
                    {
                        "name": "fee",
                        "type": "uint24",
                        "internalType": "uint24"
                    },
                    {
                        "name": "parameters",
                        "type": "bytes32",
                        "internalType": "bytes32"
                    }
                ]
            },
            {
                "name": "sqrtPriceX96",
                "type": "uint160",
                "internalType": "uint160"
            },
            {
                "name": "tick",
                "type": "int24",
                "internalType": "int24"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bytes4",
                "internalType": "bytes4"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "afterRemoveLiquidity",
        "inputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "",
                "type": "tuple",
                "internalType": "struct PoolKey",
                "components": [
                    {
                        "name": "currency0",
                        "type": "address",
                        "internalType": "Currency"
                    },
                    {
                        "name": "currency1",
                        "type": "address",
                        "internalType": "Currency"
                    },
                    {
                        "name": "hooks",
                        "type": "address",
                        "internalType": "contract IHooks"
                    },
                    {
                        "name": "poolManager",
                        "type": "address",
                        "internalType": "contract IPoolManager"
                    },
                    {
                        "name": "fee",
                        "type": "uint24",
                        "internalType": "uint24"
                    },
                    {
                        "name": "parameters",
                        "type": "bytes32",
                        "internalType": "bytes32"
                    }
                ]
            },
            {
                "name": "",
                "type": "tuple",
                "internalType": "struct ICLPoolManager.ModifyLiquidityParams",
                "components": [
                    {
                        "name": "tickLower",
                        "type": "int24",
                        "internalType": "int24"
                    },
                    {
                        "name": "tickUpper",
                        "type": "int24",
                        "internalType": "int24"
                    },
                    {
                        "name": "liquidityDelta",
                        "type": "int256",
                        "internalType": "int256"
                    },
                    {
                        "name": "salt",
                        "type": "bytes32",
                        "internalType": "bytes32"
                    }
                ]
            },
            {
                "name": "",
                "type": "int256",
                "internalType": "BalanceDelta"
            },
            {
                "name": "",
                "type": "int256",
                "internalType": "BalanceDelta"
            },
            {
                "name": "",
                "type": "bytes",
                "internalType": "bytes"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bytes4",
                "internalType": "bytes4"
            },
            {
                "name": "",
                "type": "int256",
                "internalType": "BalanceDelta"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "afterSwap",
        "inputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "",
                "type": "tuple",
                "internalType": "struct PoolKey",
                "components": [
                    {
                        "name": "currency0",
                        "type": "address",
                        "internalType": "Currency"
                    },
                    {
                        "name": "currency1",
                        "type": "address",
                        "internalType": "Currency"
                    },
                    {
                        "name": "hooks",
                        "type": "address",
                        "internalType": "contract IHooks"
                    },
                    {
                        "name": "poolManager",
                        "type": "address",
                        "internalType": "contract IPoolManager"
                    },
                    {
                        "name": "fee",
                        "type": "uint24",
                        "internalType": "uint24"
                    },
                    {
                        "name": "parameters",
                        "type": "bytes32",
                        "internalType": "bytes32"
                    }
                ]
            },
            {
                "name": "",
                "type": "tuple",
                "internalType": "struct ICLPoolManager.SwapParams",
                "components": [
                    {
                        "name": "zeroForOne",
                        "type": "bool",
                        "internalType": "bool"
                    },
                    {
                        "name": "amountSpecified",
                        "type": "int256",
                        "internalType": "int256"
                    },
                    {
                        "name": "sqrtPriceLimitX96",
                        "type": "uint160",
                        "internalType": "uint160"
                    }
                ]
            },
            {
                "name": "",
                "type": "int256",
                "internalType": "BalanceDelta"
            },
            {
                "name": "",
                "type": "bytes",
                "internalType": "bytes"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bytes4",
                "internalType": "bytes4"
            },
            {
                "name": "",
                "type": "int128",
                "internalType": "int128"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "beforeAddLiquidity",
        "inputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "",
                "type": "tuple",
                "internalType": "struct PoolKey",
                "components": [
                    {
                        "name": "currency0",
                        "type": "address",
                        "internalType": "Currency"
                    },
                    {
                        "name": "currency1",
                        "type": "address",
                        "internalType": "Currency"
                    },
                    {
                        "name": "hooks",
                        "type": "address",
                        "internalType": "contract IHooks"
                    },
                    {
                        "name": "poolManager",
                        "type": "address",
                        "internalType": "contract IPoolManager"
                    },
                    {
                        "name": "fee",
                        "type": "uint24",
                        "internalType": "uint24"
                    },
                    {
                        "name": "parameters",
                        "type": "bytes32",
                        "internalType": "bytes32"
                    }
                ]
            },
            {
                "name": "",
                "type": "tuple",
                "internalType": "struct ICLPoolManager.ModifyLiquidityParams",
                "components": [
                    {
                        "name": "tickLower",
                        "type": "int24",
                        "internalType": "int24"
                    },
                    {
                        "name": "tickUpper",
                        "type": "int24",
                        "internalType": "int24"
                    },
                    {
                        "name": "liquidityDelta",
                        "type": "int256",
                        "internalType": "int256"
                    },
                    {
                        "name": "salt",
                        "type": "bytes32",
                        "internalType": "bytes32"
                    }
                ]
            },
            {
                "name": "",
                "type": "bytes",
                "internalType": "bytes"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bytes4",
                "internalType": "bytes4"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "beforeDonate",
        "inputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "",
                "type": "tuple",
                "internalType": "struct PoolKey",
                "components": [
                    {
                        "name": "currency0",
                        "type": "address",
                        "internalType": "Currency"
                    },
                    {
                        "name": "currency1",
                        "type": "address",
                        "internalType": "Currency"
                    },
                    {
                        "name": "hooks",
                        "type": "address",
                        "internalType": "contract IHooks"
                    },
                    {
                        "name": "poolManager",
                        "type": "address",
                        "internalType": "contract IPoolManager"
                    },
                    {
                        "name": "fee",
                        "type": "uint24",
                        "internalType": "uint24"
                    },
                    {
                        "name": "parameters",
                        "type": "bytes32",
                        "internalType": "bytes32"
                    }
                ]
            },
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "",
                "type": "bytes",
                "internalType": "bytes"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bytes4",
                "internalType": "bytes4"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "beforeInitialize",
        "inputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "",
                "type": "tuple",
                "internalType": "struct PoolKey",
                "components": [
                    {
                        "name": "currency0",
                        "type": "address",
                        "internalType": "Currency"
                    },
                    {
                        "name": "currency1",
                        "type": "address",
                        "internalType": "Currency"
                    },
                    {
                        "name": "hooks",
                        "type": "address",
                        "internalType": "contract IHooks"
                    },
                    {
                        "name": "poolManager",
                        "type": "address",
                        "internalType": "contract IPoolManager"
                    },
                    {
                        "name": "fee",
                        "type": "uint24",
                        "internalType": "uint24"
                    },
                    {
                        "name": "parameters",
                        "type": "bytes32",
                        "internalType": "bytes32"
                    }
                ]
            },
            {
                "name": "",
                "type": "uint160",
                "internalType": "uint160"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bytes4",
                "internalType": "bytes4"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "beforeRemoveLiquidity",
        "inputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "",
                "type": "tuple",
                "internalType": "struct PoolKey",
                "components": [
                    {
                        "name": "currency0",
                        "type": "address",
                        "internalType": "Currency"
                    },
                    {
                        "name": "currency1",
                        "type": "address",
                        "internalType": "Currency"
                    },
                    {
                        "name": "hooks",
                        "type": "address",
                        "internalType": "contract IHooks"
                    },
                    {
                        "name": "poolManager",
                        "type": "address",
                        "internalType": "contract IPoolManager"
                    },
                    {
                        "name": "fee",
                        "type": "uint24",
                        "internalType": "uint24"
                    },
                    {
                        "name": "parameters",
                        "type": "bytes32",
                        "internalType": "bytes32"
                    }
                ]
            },
            {
                "name": "",
                "type": "tuple",
                "internalType": "struct ICLPoolManager.ModifyLiquidityParams",
                "components": [
                    {
                        "name": "tickLower",
                        "type": "int24",
                        "internalType": "int24"
                    },
                    {
                        "name": "tickUpper",
                        "type": "int24",
                        "internalType": "int24"
                    },
                    {
                        "name": "liquidityDelta",
                        "type": "int256",
                        "internalType": "int256"
                    },
                    {
                        "name": "salt",
                        "type": "bytes32",
                        "internalType": "bytes32"
                    }
                ]
            },
            {
                "name": "",
                "type": "bytes",
                "internalType": "bytes"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bytes4",
                "internalType": "bytes4"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "beforeSwap",
        "inputs": [
            {
                "name": "sender",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "key",
                "type": "tuple",
                "internalType": "struct PoolKey",
                "components": [
                    {
                        "name": "currency0",
                        "type": "address",
                        "internalType": "Currency"
                    },
                    {
                        "name": "currency1",
                        "type": "address",
                        "internalType": "Currency"
                    },
                    {
                        "name": "hooks",
                        "type": "address",
                        "internalType": "contract IHooks"
                    },
                    {
                        "name": "poolManager",
                        "type": "address",
                        "internalType": "contract IPoolManager"
                    },
                    {
                        "name": "fee",
                        "type": "uint24",
                        "internalType": "uint24"
                    },
                    {
                        "name": "parameters",
                        "type": "bytes32",
                        "internalType": "bytes32"
                    }
                ]
            },
            {
                "name": "",
                "type": "tuple",
                "internalType": "struct ICLPoolManager.SwapParams",
                "components": [
                    {
                        "name": "zeroForOne",
                        "type": "bool",
                        "internalType": "bool"
                    },
                    {
                        "name": "amountSpecified",
                        "type": "int256",
                        "internalType": "int256"
                    },
                    {
                        "name": "sqrtPriceLimitX96",
                        "type": "uint160",
                        "internalType": "uint160"
                    }
                ]
            },
            {
                "name": "",
                "type": "bytes",
                "internalType": "bytes"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bytes4",
                "internalType": "bytes4"
            },
            {
                "name": "",
                "type": "int256",
                "internalType": "BeforeSwapDelta"
            },
            {
                "name": "",
                "type": "uint24",
                "internalType": "uint24"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "getAttestationRegistry",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "contract IAttestationRegistry"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getBaseValue",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint24",
                "internalType": "uint24"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getDefaultFee",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint24",
                "internalType": "uint24"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getDurationOfAttestation",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint24",
                "internalType": "uint24"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getHooksRegistrationBitmap",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint16",
                "internalType": "uint16"
            }
        ],
        "stateMutability": "pure"
    },
    {
        "type": "function",
        "name": "lockAcquired",
        "inputs": [
            {
                "name": "data",
                "type": "bytes",
                "internalType": "bytes"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bytes",
                "internalType": "bytes"
            }
        ],
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
        "name": "poolManager",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "contract ICLPoolManager"
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
        "name": "setBaseValue",
        "inputs": [
            {
                "name": "_baseValue",
                "type": "uint24",
                "internalType": "uint24"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "setDefaultFee",
        "inputs": [
            {
                "name": "fee",
                "type": "uint24",
                "internalType": "uint24"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "setDurationOfAttestation",
        "inputs": [
            {
                "name": "_durationOfAttestation",
                "type": "uint24",
                "internalType": "uint24"
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
        "name": "vault",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "contract IVault"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "event",
        "name": "BeforeAddLiquidity",
        "inputs": [
            {
                "name": "sender",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "BeforeSwap",
        "inputs": [
            {
                "name": "sender",
                "type": "address",
                "indexed": true,
                "internalType": "address"
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
        "type": "error",
        "name": "AttestationExpired",
        "inputs": []
    },
    {
        "type": "error",
        "name": "HookNotImplemented",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InvalidPool",
        "inputs": []
    },
    {
        "type": "error",
        "name": "LockFailure",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NoAttestationEligibility",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NotPoolManager",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NotSelf",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NotSupportedExchange",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NotVault",
        "inputs": []
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