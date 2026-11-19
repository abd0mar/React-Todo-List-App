import todosReducer from "../reducers/todosReducer"
import { createContext, useState, useMemo, useReducer, useEffect } from 'react'
export const TaskDataContext = createContext()

export function TasksDataProvider({ children }) {
  // const [tasksArray, setTasksArray] = useState(() => 
  //   JSON.parse(localStorage.getItem("Tasks") || "[]")
  // )
  const [tasksArray, dispatch] = useReducer(todosReducer, [], () =>
    JSON.parse(localStorage.getItem("Tasks") || "[]")
  );

  useEffect(() => {
    localStorage.setItem("Tasks", JSON.stringify(tasksArray))
  }, [tasksArray]);

  const [inputValue, setInputValue] = useState('')
  const [status, setStatus] = useState('all')

  let filteredArray = useMemo(() => {
    return tasksArray.filter(e => {
      if (status === "all") {
        return e;
      }
      return e.status === status;
    })
  }, [status, tasksArray]);

  return (
    <TaskDataContext.Provider value={{
      tasksArray,
      inputValue,
      dispatch,
      setInputValue,
      setStatus,
      filteredArray
    }}>
      {children}
    </TaskDataContext.Provider>
  );
} 