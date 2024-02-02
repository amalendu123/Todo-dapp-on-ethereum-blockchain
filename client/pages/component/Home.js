import React from 'react';
import Navbar from "./Navbar";

const Home1 = ({ addtask, setInput, input }) => {
  return (
    <div>
      <Navbar />
      <form className="flex w-full">
        <input
          type="text"
          placeholder="enter your task"
          className="w-11/12"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <button type="submit" className="w-1/12" onClick={addtask}>
          +
        </button>
      </form>
    </div>
  );
};

export default Home1;
