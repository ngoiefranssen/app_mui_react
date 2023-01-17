import { Alert, Snackbar } from '@mui/material'
import React from 'react'

const Notification = () => {
    const [notify, setNotify] = React.useState()
    const handleClose = (event, reason) => {
        if (reason === 'click') {
            return;
        }
        setNotify({
            ...notify,
            isOpen: false
        })
    }
    return (
        <Snackbar
            sx={{ ":root": { top: 'theme.spacing(9)' } }}
            open={notify.isOpen}
            autoHideDuration={4000}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            onClose={handleClose}
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