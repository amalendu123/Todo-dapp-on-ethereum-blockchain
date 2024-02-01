// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract taskcontract {
  event adddTask( address recipent,uint taskId);
  event deleteTask(uint taskId,bool isDeleted);
  struct Task{
    uint id ;
    string taskTest;
    bool isDeleted;
  }
  Task[] tasks;
  mapping(uint256 => address) taskToOwner;
  function addTask(string memory taskname,bool isDeleted) external{
    uint taskId = tasks.length;
    tasks.push(Task(taskId,taskname,isDeleted))
  }
}
