import { Dialog, DialogContent, DialogTitle, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import React from 'react'
import Controller from './Controller'

const DialoguePup = (props) => {
    const {title, children, openPopup, setOpenPopup} = props
    return (
        <Dialog
            open={openPopup} 
            sx={{ 
                paper : {
                    maxWidth:'md',
                    // paddind:theme.spacing(2),
                    position:'absolute',
                    // top: theme.spacing(5)
                }
            }}
        >
            <DialogTitle sx={{ paddingRight: '0px' }}>
                <div style={{ display:'flex' }}>
                    <Typography variant='h6' component='div' flexGrow={1}>
                        {title}
                    </Typography>
                    <Controller.ActionButton
                        color='secondary'
                        onClick = {() => setOpenPopup(false)}
                    >
                        <CloseIcon />
                    </Controller.ActionButton>
                </div>
            </DialogTitle>
            <DialogContent dividers>
                {children}
            </DialogContent>
        </Dialog>
    )
}

export default DialoguePup