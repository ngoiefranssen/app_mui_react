import { Alert, Snackbar } from '@mui/material'
import React from 'react'

const Notification = () => {
    const [notify, setNotify] = React.useState()
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setNotify({
            ...notify,
            isOpen: false
        })
    }
    return (
        <Snackbar
            sx={{ ":root": 'to' }}
            open={notify.isOpen}
            autoHideDuration={4000}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
            <Alert>
                severity={notify.type}
                onClose={handleClose}
                {notify.message}
            </Alert>
        </Snackbar>
    )
}

export default Notification