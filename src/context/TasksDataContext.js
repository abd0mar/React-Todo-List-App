import { createContext, useState, useMemo} from 'react'
export const TaskDataContext = createContext()

export function TasksDataProvider({children}){
  const [tasksArray, setTasksArray] = useState(() => 
    JSON.parse(localStorage.getItem("Tasks") || "[]")
  )
  const [inputValue, setInputValue] = useState('')
  const [status, setStatus] = useState('all')

  let filteredArray = useMemo(() => {
    return tasksArray.filter(e => {
      if(status === "all"){
        return e;
      }
      return e.status === status;
    })
  }, [status, tasksArray])

  return (
    <TaskDataContext.Provider value={{
      tasksArray,
      setTasksArray,
      inputValue,
      setInputValue,
      setStatus,
      filteredArray
    }}>
      {children}
    </TaskDataContext.Provider>
  );
} 