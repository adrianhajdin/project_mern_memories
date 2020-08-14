import React from 'react';
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

// import useStyles from './styles';
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

// {/* <Alert severity="error">This is an error message!</Alert>
//         <Alert severity="warning">This is a warning message!</Alert>
//         <Alert severity="info">This is an information message!</Alert>
//         <Alert severity="success">This is a success message!</Alert> */}


const CustomizedSnackbars = ({ action }) => {
    const [open, setOpen] = React.useState(true);
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };
  switch (action) {
    case 'create': 
        return (
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">Memory successfully created</Alert>
            </Snackbar>
        );
    case 'delete':
        return (
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">Memory successfully deleted </Alert>
            </Snackbar>
        );
    default:
        return null;  
    }
}

export default CustomizedSnackbars;