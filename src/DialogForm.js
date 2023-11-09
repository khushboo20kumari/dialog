
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField'
import { useState } from "react";
function FormDialog(){

    const [isopen,setIsopen]=useState(true)

    const HandlerCloose=()=>{
        setIsopen(false)
    }

    const Handleropen=()=>{
        setIsopen(true)
    }

    return(
        <>
        <Button variant="contained" onClick={Handleropen}>dialog open</Button>
        <Dialog open={isopen}>
            
            <DialogTitle>
                {"Email"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText>

                    <TextField></TextField>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={HandlerCloose}>Cloose</Button>
            </DialogActions>
        </Dialog>
        </>
    )
}
export default FormDialog;