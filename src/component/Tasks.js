import * as React from 'react';
import EditTask from "./EditTask";
import CheckIcon from '@mui/icons-material/Check';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useContext } from "react";
import { TasksActionsContext } from "../context/TasksActionsContext";

export default function Task({title, id, status}){
  const { hendleDelete, handleFinishTask, handleEditTask} = useContext(TasksActionsContext);
  const [open, setOpen] = React.useState(false);
  
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOnSave = (taskText) => handleEditTask(id, taskText.title);

  return(
    <div style={{
      fontFamily:"'Work Sans', sans-serif",
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
      padding:"15px 6px 15px 15px",
      borderRadius:"5px",
      borderBottom:"1px solid #D9CDA9"
    }}>
      <div style={{display:"flex", gap:"5px", alignItems:"center"}}>
        <CheckIcon 
          className={`check-btn ${status === "finished" ? 'active-check-btn' : ''}`}
          style={{transition:"0.2s", width:"15px", height:"15px"}}
          onClick={() => handleFinishTask(id)}
        />
        <div style={{
          fontSize:"12.5px", 
          margin:"0", 
          color: status === "finished" ? '#777' : "#1B2434", 
          textDecoration: status === "finished" ? 'line-through' : ""
        }}>
          {title}
        </div>
      </div>

      <div style={{display:"flex", gap:"5px"}}>
        <DeleteForeverIcon
          className='delete-icon'
          style={{width:"15px", height:"15px", transition:'0.2s'}}
          onClick={() => hendleDelete(id)}
        />
        <EditIcon 
          className='edit-icon'
          style={{width: "15px", height: "15px", transition: "0.2s"}}
          onClick={handleClickOpen}
        />
      </div>
      <EditTask open={open} handleClickOpen={handleClickOpen} handleClose={handleClose} onSave={handleOnSave} currentTitle={title}/>
    </div>
  );
}