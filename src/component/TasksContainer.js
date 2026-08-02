import FilterBtn from "./Filter";
import AddTasks from "./AddTasks";
import { useState } from "react";
import Task from "./Tasks";

export default function TasksContainer(){
  const [tasksArray, setTasksArray] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [status, setStatus] = useState('all')

  const handleAddBtn = () => {
    if(inputValue.trim() !== ""){
      setTasksArray([...tasksArray, { title: inputValue, id: Date.now(), status: "unfinished"}]);
      setInputValue("");
    }
  }

  let filteredArray = tasksArray.filter(e => {
    if(status === "all"){
      return e;
    }
    return e.status === status;
  })

    const hendleDelete = (taskId) => {
      const updatedList = tasksArray.filter((task) => task.id !== taskId);
      setTasksArray(updatedList);
    }

    const handleFinshTask = (taskId) => {
      const updatedList = tasksArray.map((task) => {
        if(taskId === task.id){
          return task.status === "unfinished" ? {...task, status: "finished"} : {...task, status: "unfinished"};
        }
        return task;
      })
      setTasksArray(updatedList);

    }
    
    const handleStatusChange = (filterStatus) => {
      setStatus(filterStatus);


    }
  return(
    <div>
      <FilterBtn handleStatusChange={handleStatusChange}/>
      <AddTasks inputValue={inputValue} handleAddBtn={handleAddBtn} setInputValue={setInputValue}/>
      <div style={{display:"flex", flexDirection:"column"}}>
        {filteredArray.map((task) => (<Task title={task.title} id={task.id} key={task.id} status={task.status} handleDelete={hendleDelete} handleFinish={handleFinshTask}/>))}
      </div>
    </div>
  );

}