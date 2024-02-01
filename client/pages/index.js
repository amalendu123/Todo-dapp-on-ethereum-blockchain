import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "./component/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <div className="flex justify-center items-center p-20 bg-teal-700 h-screen w-screen">
    <div className="flex flex-col h-full w-full  bg-blue-600  p-4 justify-between">
      <Navbar />
      <div className="flex w-full">
        <input type="text" placeholder="enter your task "   className="w-11/12"></input>
        <button type="submit" className="w-1/12">+</button>
      </div>
    </div>
   </div>
  );
}
