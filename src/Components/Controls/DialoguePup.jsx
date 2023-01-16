import { Dialog, DialogContent, DialogTitle } from '@mui/material'
import React from 'react'

const DialoguePup = (props) => {
    const {title, children, openPopup, setOpenPopup} = props
    return (
        <Dialog 
            open={openPopup} 
            sx={{
                maxWidth:'md',
                // paddind:theme.spacing(2),
                position:'absolute',
                // top: theme.spacing(5)
                }}
            >
            <DialogTitle>
                <div>Title goes here</div>
            </DialogTitle>
            <DialogContent dividers>
            {children}
            </DialogContent>
        </Dialog>
    )
}

export default DialoguePup