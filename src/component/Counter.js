import { useContext } from "react";
import { TaskDataContext } from "../context/TasksDataContext";

export default function Counter(){
  const {tasksArray} = useContext(TaskDataContext)
  const finishedTasks = tasksArray.filter(task => task.status === "finished").length
  return(
    <p style={{margin:"0", paddingBottom:"10px", fontSize:"15px", color:"#777", fontWeight:"700"}}>{finishedTasks} of {tasksArray.length} tasks finished</p>
  );
}