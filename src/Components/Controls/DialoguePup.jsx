import { Dialog, DialogContent } from '@mui/material'
import React from 'react'

const DialoguePup = (props) => {
    const {title, children, openPopup, setopenPopup} = props
    return (
        <Dialog>
            <DialogTitle>
                <div>Title goes here</div>
            </DialogTitle>
            <DialogContent>
            <div>Content goes here</div>
            </DialogContent>
        </Dialog>
    )
}

export default DialoguePup