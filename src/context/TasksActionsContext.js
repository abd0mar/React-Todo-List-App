import { createContext} from 'react'
import { TaskDataContext } from "../context/TasksDataContext";
import { useContext } from "react";

export const TasksActionsContext = createContext()

export function TasksActionsProvider({children}){
  const {tasksArray, setTasksArray, setStatus} = useContext(TaskDataContext);

  const handleAddBtn = (inputValue) => {
    let id = Date.now();
    const updatedList = [...tasksArray, { title: inputValue, id: id, status: "unfinished"}]
    if(inputValue.trim() !== ""){
      setTasksArray(updatedList);
      localStorage.setItem("Tasks", JSON.stringify(updatedList))
    }
  }

  const hendleDeleteTask = (taskId) => {
    const updatedList = tasksArray.filter((task) => task.id !== taskId);
    setTasksArray(updatedList);
    localStorage.setItem("Tasks", JSON.stringify(updatedList))
  }

  const handleFinishTask = (taskId) => {
    const updatedList = tasksArray.map((task) => {
      if(taskId === task.id){
        return task.status === "unfinished" ? {...task, status: "finished"} : {...task, status: "unfinished"};
      }
      return task;
    })
    setTasksArray(updatedList);
    localStorage.setItem("Tasks", JSON.stringify(updatedList))
  }
  
  const handleStatusChange = (filterStatus) => {
    setStatus(filterStatus);
  }

  const handleEditTask = (taskId, newTitle) => {
    const updatedList = tasksArray.map((task) => {
      return task.id === taskId ? {...task, title:newTitle} : task;
    })
    setTasksArray(updatedList)
    localStorage.setItem("Tasks", JSON.stringify(updatedList))
  }
  
  return (
    <TasksActionsContext.Provider value={{
      handleAddBtn,
      hendleDeleteTask,
      handleFinishTask,
      handleStatusChange,
      handleEditTask
    }}>
      {children}
    </TasksActionsContext.Provider>
  );
}