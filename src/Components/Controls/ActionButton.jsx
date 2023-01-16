import { Button } from '@mui/material'
import { minHeight, style } from '@mui/system'
import React from 'react'

const useStyles = style((theme) =>{
    root:{
        minHeight: 0,
        margin: theme.spacin(0.5),
    }
    secondary:{
        backgroundColor: theme.palette.secondary.light
        '& .MuiButton-label' :{
            color: theme.palette.secondary.main
        }
    }
    primary:{
        backgroundColor: theme.palette.primary.light
        '& .MuiButton-label' :{
            color : theme.palette.primary.main
        }
    }
})

export default function ActionButton(props) {
    const { color, children, onClick } = props
    return (
        <Button
            onClick={onClick}
        >
            {children}
        </Button>
    )
}
