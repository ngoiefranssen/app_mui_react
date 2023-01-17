import { Alert, Snackbar } from '@mui/material'
import React from 'react'

const Notification = () => {
    const [notify, setNotify] = React.useState()
    return (
        <Snackbar
        open={notify.isOpen}
        autoHideDuration={4000}
        >
            <Alert>
                {notify.message}
            </Alert>
        </Snackbar>
    )
}

export default Notification