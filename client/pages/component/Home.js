import React from 'react'
import Navbar from "./Navbar";
const Home1 = () => {
  return (
    <div >
    
      <Navbar />
      <div className="flex w-full">
        <input type="text" placeholder="enter your task "   className="w-11/12"></input>
        <button type="submit" className="w-1/12">+</button>
      </div>
  
   </div>
  )
}

export default Home1;