import FilterBtn from "./Filter";
import AddTasks from "./AddTasks";
import { TaskDataContext } from "../context/TasksDataContext";
import Task from "./Tasks";
import { useContext, useEffect } from "react";
import Counter from "./Counter";

export default function TasksContainer(){
  const {filteredArray,  setTasksArray} = useContext(TaskDataContext);

  useEffect(() => {
    const storageTasks = JSON.parse(
      localStorage.getItem("Tasks") || '[]'
    )
    setTasksArray(storageTasks);
  }, [setTasksArray])
  return(
      <div>
        <Counter/>
        <FilterBtn/>
        <AddTasks/>
        <div style={{display:"flex", flexDirection:"column", overflowY:"auto", height:"270px"}}>
          {
            filteredArray.length === 0 ? <p style={{color:"#777", fontWeight:"bold", fontSize:"14px"}}>No tasks here</p> : filteredArray.map((task) => (
            <Task title={task.title} id={task.id} key={task.id} status={task.status}/>))
          }
        </div>
      </div>
  );
}