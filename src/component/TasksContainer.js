import * as React from 'react';
import { useContext } from "react";
import { TasksActionsContext } from "../context/TasksActionsContext";

import EditTask from "./EditTask";
import DeleteTask from './DeleteTask'
import FilterBtn from "./Filter";
import AddTasks from "./AddTasks";
import { TaskDataContext } from "../context/TasksDataContext";
import Task from "./Tasks";
import {useEffect } from "react";
import Counter from "./Counter";


export default function TasksContainer(){
  const [activeTask, setActiveTask] = React.useState({id: null, title: ""})

  const { hendleDeleteTask, handleEditTask} = useContext(TasksActionsContext);
  const {filteredArray,  setTasksArray} = useContext(TaskDataContext);

    //Edit Message......
    const [openEdit, setOpenEdit] = React.useState(false);
    const handleClickOpenEdit = (task) => {
      setActiveTask({ id: task.id, title: task.title });
      setOpenEdit(true);
    };
    const handleCloseEdit = () => setOpenEdit(false);
    const handleOnSaveEdit = (taskText) => handleEditTask(activeTask.id, taskText.title);
    //Delete Message......
    const [openDelete, setOpenDelete] = React.useState(false);
    const handleOpenDelete = (task) => {
      setActiveTask({ id: task.id, title: task.title });
      setOpenDelete(true);
    };
    const handleCloseDelete = () => setOpenDelete(false);
    const handleDelete = () => {
      hendleDeleteTask(activeTask.id);
      setOpenDelete(false);
    };



  useEffect(() => {
    const storageTasks = JSON.parse(
      localStorage.getItem("Tasks") || '[]'
    )

    setTasksArray(storageTasks);
  }, [setTasksArray]);


  return(
      <div>
        <Counter/>
        <FilterBtn/>
        <AddTasks/>
        <div style={{display:"flex", flexDirection:"column", overflowY:"auto", height:"270px"}}>
          {
            filteredArray.length === 0 ? <p style={{color:"#777", fontWeight:"bold", fontSize:"14px"}}>No tasks here</p> : filteredArray.map((task) => (
            <Task title={task.title} id={task.id} key={task.id} status={task.status} showDelete={() => handleOpenDelete(task)} showEdit={() => handleClickOpenEdit(task)}/>))
          }
        </div>

          <EditTask open={openEdit} handleClose={handleCloseEdit} onSave={handleOnSaveEdit} currentTitle={activeTask?.title || ""}/>
          <DeleteTask open={openDelete} handleCloseDelete={handleCloseDelete} handleDelete={handleDelete}/>
      </div>
  );
}