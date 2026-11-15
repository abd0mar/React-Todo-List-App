import './App.css';
import * as React from 'react';
// import { useContext , useEffect} from "react";
import TodoList from './component/TodoList';
import { TasksDataProvider } from './context/TasksDataContext';
import { TasksActionsProvider } from './context/TasksActionsContext';
import {ToastContextProvider} from './context/ToastContext';

function App() {

  return (
    <ToastContextProvider>
      <TasksDataProvider>
        <TasksActionsProvider>
            <div className="App" style={{display:"flex", height:"100vh", justifyContent:"center", alignItems:"center"}}>
              <TodoList/>
            </div>
        </TasksActionsProvider>
      </TasksDataProvider>
    </ToastContextProvider>
  );
}

export default App;
