import './App.css';
import * as React from 'react';
// import { useContext , useEffect} from "react";
import TodoList from './component/TodoList';
import { TasksDataProvider } from './context/TasksDataContext';
import { TasksActionsProvider } from './context/TasksActionsContext';
import SimpleSnackbar from './component/MySnackbar';
import { ToastContext } from './context/ToastContext';

function App() {
  const [openToast, setOpenToast] = React.useState(false);



  return (
    <ToastContextProvider>
      <TasksDataProvider>
        <TasksActionsProvider>
            <div className="App" style={{display:"flex", height:"100vh", justifyContent:"center", alignItems:"center"}}>
              <TodoList/>
              <SimpleSnackbar open={openToast} handleClose={handleCloseToast} message={message}/>
            </div>
        </TasksActionsProvider>
      </TasksDataProvider>
    </ToastContextProvider>
  );
}

export default App;
