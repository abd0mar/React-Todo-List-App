import * as React from "react";
import { createContext, useState } from "react";
import { SimpleSnackbar } from '../component/MySnackbar';
// import SimpleSnackbar from "../component/MySnackbar";
// import { ToastContext } from './context/ToastContext';

export const ToastContext = createContext({})
export function ToastContextProvider({ children }) {
  const [openToast, setOpenToast] = useState(false);
  const [message, setMessage] = useState()

  const handleOpenToast = (message) => {
    setMessage(message)
    setOpenToast(true)
  };
  const handleCloseToast = () => setOpenToast(false);

  return (
    <ToastContext.Provider value={{ handleOpenToast }}>
      <SimpleSnackbar open={openToast} handleClose={handleCloseToast} message={message} />
      {children}
    </ToastContext.Provider>
  );
}