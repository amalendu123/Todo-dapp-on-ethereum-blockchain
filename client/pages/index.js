import Image from "next/image";
import { Inter } from "next/font/google";
import { Web3Provider } from '@ethersproject/providers';
import taskAbi from "../../backend/artifacts/contracts/TestContract.sol/taskcontract.json"
import Home1 from "./component/Home";
import { useState } from "react";
import { ethers } from 'ethers';

const inter = Inter({ subsets: ["latin"] });
const contractAddress = "0xe72B158c338aFc3C8aE4558A774Ee989725D5daf";

export default function Home() {
  const [connect, setConnect] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [currentAccount, setCurrentAccount] = useState('');
  const [input,setInput] = useState('')
  const [tasks,settasks] = useState([])
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
  const addTask = async (e) => {
    e.preventDefault();
    let task = {
      taskText: input,
      isDeleted: false
    };
  
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new Web3Provider(ethereum);
        const signer = provider.getSigner();
        const TaskContract = new ethers.Contract(
          contractAddress,
          taskAbi.abi,
          signer
        );
  
        const tx = await TaskContract.addTask(task.taskText, task.isDeleted);
  
        // Wait for the transaction to be mined
        await tx.wait();
  
        settasks([...tasks, task]);
      } else {
        console.log("ethereum object does not exist");
      }
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <div className="flex justify-center items-center p-20 bg-teal-700 h-screen w-screen">
      <div className="flex flex-col h-full w-full bg-blue-600 p-4 justify-between">
      {connect ? (
        <Home1 addtask={addTask} setInput={setInput} input={input} />
      ) : (
        <button onClick={connectWallet} className="text-5xl flex justify-center items-center bg-white">
          Connect
        </button>
      )}
      
      </div>
    </div>
  );
}
