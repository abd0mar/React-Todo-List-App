import { createContext} from 'react'
import { TaskDataContext } from "../context/TasksDataContext";
import { useContext } from "react";

export const TasksActionsContext = createContext()

export function TasksActionsProvider({children}){
  const {tasksArray, setTasksArray, inputValue, setInputValue, setStatus} = useContext(TaskDataContext);

  const handleAddBtn = () => {
    if(inputValue.trim() !== ""){
      setTasksArray([...tasksArray, { title: inputValue, id: Date.now(), status: "unfinished"}]);
      setInputValue("");
    }
  }

  const hendleDelete = (taskId) => {
    const updatedList = tasksArray.filter((task) => task.id !== taskId);
    setTasksArray(updatedList);
  }

  const handleFinishTask = (taskId) => {
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

  return (
    <TasksActionsContext.Provider value={{
      handleAddBtn,
      hendleDelete,
      handleFinishTask,
      handleStatusChange,
    }}>
      {children}
    </TasksActionsContext.Provider>
  );
}