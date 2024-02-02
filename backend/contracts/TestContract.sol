// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract taskcontract {
  event adddTask( address recipent,uint taskId);
  event ddeleteTask(uint taskId,bool isDeleted);
  struct Task{
    uint id ;
    string taskTest;
    bool isDeleted;
  }
  Task[] tasks;
  mapping(uint256 => address) taskToOwner;
  function addTask(string memory taskname,bool isDeleted) external{
    uint taskId = tasks.length;
    tasks.push(Task(taskId,taskname,isDeleted));
    taskToOwner[taskId] = msg.sender;
    emit adddTask(msg.sender, taskId);
  }
  function getMyTasks() external view returns (Task[] memory){
    Task[] memory temporary = new Task[](tasks.length);
    uint counter = 0;
    for(uint i = 0;i<tasks.length;i++){
      if(taskToOwner[i] == msg.sender && tasks[i].isDeleted == false){
          temporary[counter] = tasks[i];
          counter++;
      }
    }
      Task[] memory result = new Task[](counter);
      for(uint i = 0;i<counter;i++){
        result[i] = temporary[i];
      } 
      return result;
    
  
  }
  function deleteTask(uint taskId,bool isDeleted) external{
    if(taskToOwner[taskId] == msg.sender){
      tasks[taskId].isDeleted = isDeleted;
      emit ddeleteTask(taskId, isDeleted);
    }
  }

}