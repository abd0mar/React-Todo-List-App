import FilterBtn from "./Filter";
import AddTasks from "./AddTasks";
import { TaskDataContext } from "../context/TasksDataContext";
import Task from "./Tasks";
import { useContext, useEffect } from "react";

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
        <FilterBtn/>
        <AddTasks/>
        <div style={{display:"flex", flexDirection:"column", overflowY:"scroll", maxHeight:"300px"}}>
          {filteredArray.map((task) => (
            <Task 
              title={task.title}
              id={task.id}
              key={task.id}
              status={task.status}/>))
          }
        </div>
      </div>
  );
}