import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    styled,
    Typography
} from '@mui/material'
import Controller from './Controls/Controller'
import React from 'react'

const useStyles = styled(theme => ({
    dialog: {
        padding: theme.spacing(2),
        position: 'absolute',
        top: theme.spacing(5)
    },
    dialogTitle: {
        textAlign: 'center'
    },
    dialogContent: {
        textAlign: 'center'
    },
    dialogAction: {
        justifyContent: 'center'
    },
    titleIcon: {
        backgroundColor: theme.palette.secondary.light,
        color: theme.palette.secondary.main,
        '&:hover': {
            backgroundColor: theme.palette.secondary.light,
            cursor: 'default'
        },
        '& .MuiSvgIcon-root': {
            fontSize: '8rem',
        }
    }
}))

const ConfirmDialog = (props) => {
    const { confirmDialog, setConfirmDialog } = props
    return (
        <Dialog open={confirmDialog.isOpen}>
            <DialogTitle></DialogTitle>
            <DialogContent>
                <Typography variant="h6">
                    {confirmDialog.title}
                </Typography>
                <Typography variant="subtitle2">
                    {confirmDialog.subTitle}
                </Typography>
            </DialogContent>
            <DialogActions>
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