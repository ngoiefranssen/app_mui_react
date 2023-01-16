import { Dialog, DialogContent } from '@mui/material'
import React from 'react'

const DialoguePup = (props) => {
    const {title, children, openPopup, setopenPopup} = props
    return (
        <Dialog>
            <DialogTitle>
                <div></div>
            </DialogTitle>
            <DialogContent>

            </DialogContent>
        </Dialog>
    )
}

export default DialoguePup