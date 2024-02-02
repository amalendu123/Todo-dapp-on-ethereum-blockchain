import { useEffect, useState } from "react";
import { ethers } from 'ethers';
import Web3 from "web3";
import Home1 from "./component/Home";

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

const contractAddress = "0xd9145CCE52D386f254917e481eB44e9943F39138";

export default function Home() {
  const [connect, setConnect] = useState(false);
  const [currentAccount, setCurrentAccount] = useState('');
  const [input, setInput] = useState('');
  const [tasks, settasks] = useState([]);

  useEffect(() => {
    connectWallet();
    getallTasks();
    console.log(tasks);
    
  }, [tasks]);

  const connectWallet = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        console.log("Metamask does not exist");
        return;
      }

      let chainId = await ethereum.request({ method: "eth_chainId" });
      console.log("Connected to chain:", chainId);

      const sepoliaChainId = '0xaa36a7';

      if (chainId !== sepoliaChainId) {
        alert("You are not connected to Sepolia");
        setConnect(false);
      } else {
        setConnect(true);
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        setCurrentAccount(accounts[0]);
        console.log('Found account:', accounts[0]);
      }
    } catch (error) {
      console.error(error);
    }
  }

  const getallTasks = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const TaskContract = new ethers.Contract(
          contractAddress,
          abi,
          signer
        );
        let allTasks = await TaskContract.getMyTasks();
        settasks(allTasks);
        console.log(tasks);
      } else {
        console.log("Web3 object does not exist");
      }
    } catch (error) {
      console.error(error);
    }
  }

  const addTask = async (e) => {
    e.preventDefault();
    let task = { taskText: input, isDeleted: false };

    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const TaskContract = new ethers.Contract(
          contractAddress,
          abi,
          signer
        );

        // Assuming addTask method returns a transaction object
        const tx = await TaskContract.addTask(task.taskText, task.isDeleted);

        // Wait for the transaction to be mined
        await tx.wait();

        // Update the local state with the new task
        settasks([...tasks, task]);
      } else {
        console.log("Web3 object does not exist");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center p-20 bg-teal-700 h-screen w-screen">
      <div className="flex flex-col h-full w-full bg-blue-600 p-4 justify-between">
        {connect ? (
          <Home1 addtask={addTask} setInput={setInput} input={input} tasks={tasks} />
        ) : (
          <button onClick={connectWallet} className="text-5xl flex justify-center items-center bg-white">
            Connect
          </button>
        )}
      </div>
    </div>
  );
}
