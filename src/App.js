import './App.css';
import TodoList from './component/TodoList';

function App() {
  return (
    <div className="App" style={{display:"flex", height:"100vh", justifyContent:"center", alignItems:"center"}}>
      <TodoList/>
    </div>
  );
}

export default App;
