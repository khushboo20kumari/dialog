import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog() {
  const [isopen, setIsopen] = React.useState(false);

  const handleClickOpen = () => {
    setIsopen(true);
  };

  const handleClose = () => {
    setIsopen(false);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>

      <Dialog
        open={isopen}
        onClose={handleClose}
        
      >

        <DialogTitle>
          {"Use Google's location service?"}
        </DialogTitle>

        <DialogContent>
          <DialogContentText >
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          
          <Button onClick={handleClose} >
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

