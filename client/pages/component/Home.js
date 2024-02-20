import React from 'react';
import Navbar from "./Navbar";
import Taskc from "./Taskc";

const Home = ({ addtask, setInput, input, tasks }) => {
  return (
    <div>
      <Navbar />
      <div>
        <ul>
          {tasks.map(item => (
            <Taskc
              key={item.id}
              tasktext={item.taskText}
            />
          ))}
        </ul>
      </div>
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

export default Home;
