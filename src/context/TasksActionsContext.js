import { createContext, useContext } from 'react'
import { TaskDataContext } from "../context/TasksDataContext";
import { ToastContext } from "../context/ToastContext";


// console.log(todosReducer)
export const TasksActionsContext = createContext()
export function TasksActionsProvider({ children }) {
  const { handleOpenToast } = useContext(ToastContext);
  const { tasksArray, setStatus, dispatch } = useContext(TaskDataContext);


  // Add a new task ..............
  const handleAddBtn = (inputValue) => {
    dispatch({ type: "added", payload: { id: Date.now(), title: inputValue } });
    handleOpenToast("The task was successfully added");
  }

  // Delete task ..............
  const hendleDeleteTask = (taskId) => {
    dispatch({ type: "delete", payload: { id: taskId } })
    handleOpenToast("The task was successfully deleted");
  }

  // Finish task ..............
  const handleFinishTask = (taskId) => {
    dispatch({ type: "finishTask", payload: { id: taskId } })
    const task = tasksArray.find((t) => t.id === taskId)
    if (taskId === task.id) task.status === "unfinished"
      ? handleOpenToast("The task was successfully completed")
      : handleOpenToast("The task was successfully unchecked")
  }

  // Change status ..............
  const handleStatusChange = (filterStatus) => {
    setStatus(filterStatus);
  }

  // Edit task ..............
  const handleEditTask = (taskId, newTitle) => {
    const updatedList = tasksArray.map((task) => {
      return task.id === taskId ? { ...task, title: newTitle } : task;
    })
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