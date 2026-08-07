import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { TasksActionsContext } from '../context/TasksActionsContext';
import { useContext } from 'react';

export default function FilterBtn(){
  const {handleStatusChange} = useContext(TasksActionsContext)

  const [alignment, setAlignment] = React.useState('all');
  
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    handleStatusChange(newAlignment)
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
      size='small'
      style={{marginBottom:"20px"}}
    >
      <ToggleButton style={{fontFamily:"'IBM Plex Mono', monospace", padding:"5px", fontSize:"12px"}} value="all">All</ToggleButton>
      <ToggleButton style={{fontFamily:"'IBM Plex Mono', monospace", padding:"5px", fontSize:"12px"}} value="finished">Finshed</ToggleButton>
      <ToggleButton style={{ fontFamily:"'IBM Plex Mono', monospace", padding:"5px", fontSize:"12px"}} value="unfinished">unfinished</ToggleButton>
    </ToggleButtonGroup>
  );
}