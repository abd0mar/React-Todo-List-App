import { useContext, useMemo } from "react";
import { TaskDataContext } from "../context/TasksDataContext";

export default function Counter(){
  const {tasksArray} = useContext(TaskDataContext)
  const finishedCount = useMemo(() => tasksArray.filter(task => task.status === "finished").length, [tasksArray]) 
  return(
    <p style={{margin:"0", paddingBottom:"10px", fontSize:"15px", color:"#777", fontWeight:"700"}}>{finishedCount} of {tasksArray.length} tasks finished</p>
  );
}