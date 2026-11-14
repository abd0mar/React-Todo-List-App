import { createContext} from 'react'
import { TaskDataContext } from "../context/TasksDataContext";
import { useContext } from "react";
import { ToastContext } from "../context/ToastContext";


export const TasksActionsContext = createContext()
export function TasksActionsProvider({children}){
  const {handleOpenToast} = useContext(ToastContext);
  const {tasksArray, setTasksArray, setStatus} = useContext(TaskDataContext);

  // Add a new task ..............
  const handleAddBtn = (inputValue) => {
    let id = Date.now();
    const updatedList = [...tasksArray, { title: inputValue, id: id, status: "unfinished"}]
    if(inputValue.trim() !== ""){
      setTasksArray(updatedList);
      localStorage.setItem("Tasks", JSON.stringify(updatedList))
    }

    handleOpenToast("The task was successfully added");
  }

  // Delete task ..............
  const hendleDeleteTask = (taskId) => {
    const updatedList = tasksArray.filter((task) => task.id !== taskId);
    setTasksArray(updatedList);
    localStorage.setItem("Tasks", JSON.stringify(updatedList))
    handleOpenToast("The task was successfully deleted");
  }

  // Finish task ..............
  const handleFinishTask = (taskId) => {
    const updatedList = tasksArray.map((task) => {
      if(taskId === task.id){
        if(task.status === "unfinished"){
          handleOpenToast("The task was successfully completed");
          return {...task, status: "finished"}
        }else{
          handleOpenToast("The task was successfully unchecked");
          return {...task, status: "unfinished"}
        }
        // return task.status === "unfinished" ? {...task, status: "finished"} : {...task, status: "unfinished"};
      }
      return task;
    })
    setTasksArray(updatedList);
    localStorage.setItem("Tasks", JSON.stringify(updatedList))
    // handleOpenToast("The task was successfully completed");
  }
  
  // Change status ..............
  const handleStatusChange = (filterStatus) => {
    setStatus(filterStatus);
  }

  // Edit task ..............
  const handleEditTask = (taskId, newTitle) => {
    const updatedList = tasksArray.map((task) => {
      return task.id === taskId ? {...task, title:newTitle} : task;
    })
    setTasksArray(updatedList)
    localStorage.setItem("Tasks", JSON.stringify(updatedList))
    handleOpenToast("The task was successfully modified");
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