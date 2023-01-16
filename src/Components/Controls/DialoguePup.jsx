import { Dialog, DialogContent } from '@mui/material'
import React from 'react'

const DialoguePup = (props) => {
    const {title, children, openPopup, setOpenPopup} = props
    return (
        <Dialog 
            open={openPopup} 
            sx={{
                paddind:theme.spacing(2),
                position:'absolute',
                top: theme.spacing(5)
                }}
            >
            <DialogTitle>
                <div>Title goes here</div>
            </DialogTitle>
            <DialogContent>
            {children}
            </DialogContent>
        </Dialog>
    )
}

export default DialoguePup