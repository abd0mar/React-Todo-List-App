import './App.css';
import TodoList from './component/TodoList';
import { TasksDataProvider } from './context/TasksDataContext';
import { TasksActionsProvider } from './context/TasksActionsContext';

function App() {
  return (
    <TasksDataProvider>
      <TasksActionsProvider>
        <div className="App" style={{display:"flex", height:"100vh", justifyContent:"center", alignItems:"center"}}>
          <TodoList/>
        </div>
      </TasksActionsProvider>
    </TasksDataProvider>
  );
}

export default App;
