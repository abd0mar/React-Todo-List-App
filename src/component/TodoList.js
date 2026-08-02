import { Paper } from '@mui/material';
// import AddTasks from "./AddTasks";
import TasksContainer from "./TasksContainer";

export default function TodoList(){
  return(
    <div className='app-container'>
      <h1 style={{margin:"0 0 10px 0", color:"#F1EAD6", fontFamily:"'Fraunces', serif", textAlign:"start"}}>My Tasks</h1>
    <Paper elevation={8} sx={{ borderRadius: '2px 10px 10px 10px', p: 3 }} style={{background:"#EFE6D3", padding:"26px 17px 18px"}}>
      {/* <hr></hr> */}
      <TasksContainer/>
    </Paper>
    </div>
    // <div style={{backgroundColor:"#eee", width:"400px", borderRadius:"5px", padding:"15px"}}>
    // </div>
  );
}