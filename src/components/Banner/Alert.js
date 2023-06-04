import { Snackbar } from '@material-ui/core';
import React from 'react'

import { CryptoState } from '../../CryptoContext';
import { AlertTitle } from '@material-ui/lab';


const Alert = () => {

    const {alert, setAlert} = CryptoState();
    
    
      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setAlert({open: false});
      };

  return (
    <Snackbar  open={alert.open} autoHideDuration={3000} onClose={handleClose}>
        <AlertTitle
            onClose={handleClose} 
            severity={alert.type}
            variant="filled"
            elevation={10}
        >
            {alert.message}
        </AlertTitle>
    </Snackbar>
  )
}

export default Alert