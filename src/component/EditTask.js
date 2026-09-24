import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';


export default function EditTask({handleClickOpen, handleClose, open, onSave, currentTitle}) {
  

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    onSave(formJson);
    handleClose();
  };
  
  return (
    <React.Fragment >
      <Dialog open={open} onClose={handleClose}
        slotProps={{
          paper:{
            sx:{
              backgroundColor: "#EFE6D3",
            }
          }
        }}
      >
        <DialogTitle>Edit Task</DialogTitle>
        <DialogContent >
          <form onSubmit={handleSubmit} id="edit-task">
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="title"
              label="Title"
              type="text"
              fullWidth
              variant="standard"
              defaultValue={currentTitle}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" form="edit-task">
            Edit
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
