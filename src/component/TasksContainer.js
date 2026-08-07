import FilterBtn from "./Filter";
import AddTasks from "./AddTasks";
import { TaskDataContext } from "../context/TasksDataContext";
import Task from "./Tasks";
import { useContext } from "react";

export default function TasksContainer(){
  const {filteredArray} = useContext(TaskDataContext);
  return(
      <div>
        <FilterBtn/>
        <AddTasks/>
        <div style={{display:"flex", flexDirection:"column"}}>
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