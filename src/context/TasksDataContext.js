import { createContext, useState} from 'react'
export const TaskDataContext = createContext()

export function TasksDataProvider({children}){
  const [tasksArray, setTasksArray] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [status, setStatus] = useState('all')

  let filteredArray = tasksArray.filter(e => {
    if(status === "all"){
      return e;
    }
    return e.status === status;
  })

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