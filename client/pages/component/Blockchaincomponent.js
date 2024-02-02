import Web3 from "web3";  


const abi = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "recipent",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "taskId",
				"type": "uint256"
			}
		],
		"name": "adddTask",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "taskId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "isDeleted",
				"type": "bool"
			}
		],
		"name": "ddeleteTask",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "taskname",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "isDeleted",
				"type": "bool"
			}
		],
		"name": "addTask",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "taskId",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "isDeleted",
				"type": "bool"
			}
		],
		"name": "deleteTask",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getMyTasks",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "taskTest",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "isDeleted",
						"type": "bool"
					}
				],
				"internalType": "struct taskcontract.Task[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]


const provider = new Web3.providers.HttpProvider(
    "https://sepolia.infura.io/v3/3992e4670ba74252864098116d844c36"
);

const web3 = new Web3(provider);


const taskcontract = new web3.eth.Contract(abi, "0xd9145CCE52D386f254917e481eB44e9943F39138");

export default taskcontract;
