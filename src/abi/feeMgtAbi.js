export const feeMgtAbi = [{"type": "constructor", "inputs": [], "stateMutability": "nonpayable"}, {
    "type": "function",
    "name": "addFeeToken",
    "inputs": [{"name": "tokenSymbol", "type": "string", "internalType": "string"}, {
        "name": "tokenAddress",
        "type": "address",
        "internalType": "address"
    }, {"name": "computingPrice", "type": "uint256", "internalType": "uint256"}],
    "outputs": [{"name": "", "type": "bool", "internalType": "bool"}],
    "stateMutability": "nonpayable"
}, {
    "type": "function",
    "name": "deleteFeeToken",
    "inputs": [{"name": "tokenSymbol", "type": "string", "internalType": "string"}],
    "outputs": [],
    "stateMutability": "nonpayable"
}, {
    "type": "function",
    "name": "getBalance",
    "inputs": [{"name": "eoa", "type": "address", "internalType": "address"}, {
        "name": "tokenSymbol",
        "type": "string",
        "internalType": "string"
    }],
    "outputs": [{
        "name": "",
        "type": "tuple",
        "internalType": "struct Balance",
        "components": [{"name": "free", "type": "uint256", "internalType": "uint256"}, {
            "name": "locked",
            "type": "uint256",
            "internalType": "uint256"
        }]
    }],
    "stateMutability": "view"
}, {
    "type": "function",
    "name": "getFeeTokenBySymbol",
    "inputs": [{"name": "tokenSymbol", "type": "string", "internalType": "string"}],
    "outputs": [{
        "name": "",
        "type": "tuple",
        "internalType": "struct FeeTokenInfo",
        "components": [{"name": "symbol", "type": "string", "internalType": "string"}, {
            "name": "tokenAddress",
            "type": "address",
            "internalType": "address"
        }, {"name": "computingPrice", "type": "uint256", "internalType": "uint256"}]
    }],
    "stateMutability": "view"
}, {
    "type": "function",
    "name": "getFeeTokens",
    "inputs": [],
    "outputs": [{
        "name": "",
        "type": "tuple[]",
        "internalType": "struct FeeTokenInfo[]",
        "components": [{"name": "symbol", "type": "string", "internalType": "string"}, {
            "name": "tokenAddress",
            "type": "address",
            "internalType": "address"
        }, {"name": "computingPrice", "type": "uint256", "internalType": "uint256"}]
    }],
    "stateMutability": "view"
}, {
    "type": "function",
    "name": "initialize",
    "inputs": [{
        "name": "_router",
        "type": "address",
        "internalType": "contract IRouter"
    }, {"name": "computingPriceForETH", "type": "uint256", "internalType": "uint256"}, {
        "name": "contractOwner",
        "type": "address",
        "internalType": "address"
    }],
    "outputs": [],
    "stateMutability": "nonpayable"
}, {
    "type": "function",
    "name": "isSupportToken",
    "inputs": [{"name": "tokenSymbol", "type": "string", "internalType": "string"}],
    "outputs": [{"name": "", "type": "bool", "internalType": "bool"}],
    "stateMutability": "view"
}, {
    "type": "function",
    "name": "lock",
    "inputs": [{"name": "taskId", "type": "bytes32", "internalType": "bytes32"}, {
        "name": "submitter",
        "type": "address",
        "internalType": "address"
    }, {"name": "tokenSymbol", "type": "string", "internalType": "string"}, {
        "name": "toLockAmount",
        "type": "uint256",
        "internalType": "uint256"
    }],
    "outputs": [{"name": "", "type": "bool", "internalType": "bool"}],
    "stateMutability": "nonpayable"
}, {
    "type": "function",
    "name": "owner",
    "inputs": [],
    "outputs": [{"name": "", "type": "address", "internalType": "address"}],
    "stateMutability": "view"
}, {
    "type": "function",
    "name": "payWorker",
    "inputs": [{"name": "taskId", "type": "bytes32", "internalType": "bytes32"}, {
        "name": "submitter",
        "type": "address",
        "internalType": "address"
    }, {"name": "workerOwner", "type": "address", "internalType": "address"}, {
        "name": "tokenSymbol",
        "type": "string",
        "internalType": "string"
    }],
    "outputs": [],
    "stateMutability": "nonpayable"
}, {
    "type": "function",
    "name": "renounceOwnership",
    "inputs": [],
    "outputs": [],
    "stateMutability": "nonpayable"
}, {
    "type": "function",
    "name": "router",
    "inputs": [],
    "outputs": [{"name": "", "type": "address", "internalType": "contract IRouter"}],
    "stateMutability": "view"
}, {
    "type": "function",
    "name": "settle",
    "inputs": [{"name": "taskId", "type": "bytes32", "internalType": "bytes32"}, {
        "name": "submitter",
        "type": "address",
        "internalType": "address"
    }, {"name": "tokenSymbol", "type": "string", "internalType": "string"}, {
        "name": "dataPrice",
        "type": "uint256",
        "internalType": "uint256"
    }, {"name": "dataProviders", "type": "address[]", "internalType": "address[]"}],
    "outputs": [{"name": "", "type": "bool", "internalType": "bool"}],
    "stateMutability": "nonpayable"
}, {
    "type": "function",
    "name": "transferOwnership",
    "inputs": [{"name": "newOwner", "type": "address", "internalType": "address"}],
    "outputs": [],
    "stateMutability": "nonpayable"
}, {
    "type": "function",
    "name": "transferToken",
    "inputs": [{"name": "from", "type": "address", "internalType": "address"}, {
        "name": "tokenSymbol",
        "type": "string",
        "internalType": "string"
    }, {"name": "amount", "type": "uint256", "internalType": "uint256"}],
    "outputs": [],
    "stateMutability": "payable"
}, {
    "type": "function",
    "name": "unlock",
    "inputs": [{"name": "taskId", "type": "bytes32", "internalType": "bytes32"}, {
        "name": "submitter",
        "type": "address",
        "internalType": "address"
    }, {"name": "tokenSymbol", "type": "string", "internalType": "string"}],
    "outputs": [{"name": "", "type": "bool", "internalType": "bool"}],
    "stateMutability": "nonpayable"
}, {
    "type": "function",
    "name": "updateFeeToken",
    "inputs": [{"name": "tokenSymbol", "type": "string", "internalType": "string"}, {
        "name": "tokenAddress",
        "type": "address",
        "internalType": "address"
    }, {"name": "computingPrice", "type": "uint256", "internalType": "uint256"}],
    "outputs": [{"name": "", "type": "bool", "internalType": "bool"}],
    "stateMutability": "nonpayable"
}, {
    "type": "function",
    "name": "updateRouter",
    "inputs": [{"name": "_router", "type": "address", "internalType": "contract IRouter"}],
    "outputs": [],
    "stateMutability": "nonpayable"
}, {
    "type": "function",
    "name": "withdrawToken",
    "inputs": [{"name": "to", "type": "address", "internalType": "address"}, {
        "name": "tokenSymbol",
        "type": "string",
        "internalType": "string"
    }, {"name": "amount", "type": "uint256", "internalType": "uint256"}],
    "outputs": [],
    "stateMutability": "nonpayable"
}, {
    "type": "event",
    "name": "FeeLocked",
    "inputs": [{
        "name": "taskId",
        "type": "bytes32",
        "indexed": true,
        "internalType": "bytes32"
    }, {"name": "tokenSymbol", "type": "string", "indexed": false, "internalType": "string"}, {
        "name": "amount",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
    }],
    "anonymous": false
}, {
    "type": "event",
    "name": "FeeSettled",
    "inputs": [{
        "name": "taskId",
        "type": "bytes32",
        "indexed": true,
        "internalType": "bytes32"
    }, {"name": "tokenSymbol", "type": "string", "indexed": false, "internalType": "string"}, {
        "name": "amount",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
    }],
    "anonymous": false
}, {
    "type": "event",
    "name": "FeeTokenAdded",
    "inputs": [{
        "name": "tokenSymbol",
        "type": "string",
        "indexed": true,
        "internalType": "string"
    }, {
        "name": "tokenAddress",
        "type": "address",
        "indexed": false,
        "internalType": "address"
    }, {"name": "computingPrice", "type": "uint256", "indexed": false, "internalType": "uint256"}],
    "anonymous": false
}, {
    "type": "event",
    "name": "FeeTokenDeleted",
    "inputs": [{"name": "tokenSymbol", "type": "string", "indexed": true, "internalType": "string"}],
    "anonymous": false
}, {
    "type": "event",
    "name": "FeeTokenUpdated",
    "inputs": [{
        "name": "tokenSymbol",
        "type": "string",
        "indexed": true,
        "internalType": "string"
    }, {
        "name": "tokenAddress",
        "type": "address",
        "indexed": false,
        "internalType": "address"
    }, {"name": "computingPrice", "type": "uint256", "indexed": false, "internalType": "uint256"}],
    "anonymous": false
}, {
    "type": "event",
    "name": "FeeUnlocked",
    "inputs": [{
        "name": "taskId",
        "type": "bytes32",
        "indexed": true,
        "internalType": "bytes32"
    }, {"name": "tokenSymbol", "type": "string", "indexed": false, "internalType": "string"}, {
        "name": "amount",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
    }],
    "anonymous": false
}, {
    "type": "event",
    "name": "Initialized",
    "inputs": [{"name": "version", "type": "uint8", "indexed": false, "internalType": "uint8"}],
    "anonymous": false
}, {
    "type": "event",
    "name": "OwnershipTransferred",
    "inputs": [{
        "name": "previousOwner",
        "type": "address",
        "indexed": true,
        "internalType": "address"
    }, {"name": "newOwner", "type": "address", "indexed": true, "internalType": "address"}],
    "anonymous": false
}, {
    "type": "event",
    "name": "RouterUpdated",
    "inputs": [{
        "name": "oldRouter",
        "type": "address",
        "indexed": false,
        "internalType": "contract IRouter"
    }, {"name": "newRouter", "type": "address", "indexed": false, "internalType": "contract IRouter"}],
    "anonymous": false
}, {
    "type": "event",
    "name": "TokenTransfered",
    "inputs": [{"name": "from", "type": "address", "indexed": false, "internalType": "address"}, {
        "name": "tokenSymbol",
        "type": "string",
        "indexed": false,
        "internalType": "string"
    }, {"name": "amount", "type": "uint256", "indexed": false, "internalType": "uint256"}],
    "anonymous": false
}, {
    "type": "event",
    "name": "TokenWithdrawn",
    "inputs": [{"name": "to", "type": "address", "indexed": false, "internalType": "address"}, {
        "name": "tokenSymbol",
        "type": "string",
        "indexed": false,
        "internalType": "string"
    }, {"name": "amount", "type": "uint256", "indexed": false, "internalType": "uint256"}],
    "anonymous": false
}]