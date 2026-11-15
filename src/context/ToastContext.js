import { createContext } from "react";
// import SimpleSnackbar from "../component/MySnackbar";

export const ToastContext = createContext({})
export function ToastProvider(){
  const [message, setMessage] = React.useState()
  const handleOpenToast = (message) => {
    setMessage(message)
    setOpenToast(true)};
  const handleCloseToast = () => setOpenToast(false);
  
  return(
    <ToastContext.Provider value={}>

    </ToastContext.Provider>
  );
}