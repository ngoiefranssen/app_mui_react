import { Button } from '@mui/material'
import { style } from '@mui/system'
import React from 'react'

const useStyles = style((theme) =>{

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
