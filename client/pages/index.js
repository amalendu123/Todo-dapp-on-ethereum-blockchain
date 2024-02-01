import Image from "next/image";
import { Inter } from "next/font/google";

import Home1 from "./component/Home";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [connect, setconnect] = useState(false);
  function onhandleClick(){
    console.log("pressed");
  }
  return (
   <div className="flex justify-center items-center p-20 bg-teal-700 h-screen w-screen">
    <div className="flex flex-col h-full w-full  bg-blue-600  p-4 justify-between">
    {connect?<Home1 />:<button onClick={onhandleClick} className="text-5xl flex justify-center items-center ">connect</button>}
      
    </div>
   </div>
  );
}
