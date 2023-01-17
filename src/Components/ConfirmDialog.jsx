import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    styled,
    Typography
} from '@mui/material'
import Controller from './Controls/Controller'
import NotificationsIcon from '@mui/icons-material/Notifications';
import React from 'react'

const ConfirmDialog = (props) => {
    const { confirmDialog, setConfirmDialog } = props
    return (
        <Dialog 
            open={confirmDialog.isOpen}
            sx={{ 
                padding: 'spacing=2',
                position: 'absolute',
                top: 'spacing=5'
             }}
        >
            <DialogTitle sx={{ textAlign: 'center' }}>
                <IconButton
                    disableRipple
                    sx={{ 
                        paper: {
                            backgroundColor: 'palette.secondary.light',
                            color: 'palette.secondary.main',
                            '&:hover': {
                                backgroundColor: 'palette.secondary.light',
                                cursor: 'default'
                            },
                            '& .MuiSvgIcon-root': {
                                fontSize: '8rem',
                        }}
                    }}
                >
                    <NotificationsIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent sx={{ textAlign: 'center' }}>
                <Typography variant="h6">
                    {confirmDialog.title}
                </Typography>
                <Typography variant="subtitle2">
                    {confirmDialog.subTitle}
                </Typography>
            </DialogContent>
            <DialogActions sx={{ justifyContent : 'center' }}>
                <Controller.Button
                    text="No"
                    color="default"
                    onClick={() => setConfirmDialog({ ...confirmDialog, isOpen: false })} />
                <Controller.Button
                    text="Yes"
                    color="secondary"
                    onClick={confirmDialog.onConfirm} />
            </DialogActions>
        </Dialog>
    )
}

export default ConfirmDialog