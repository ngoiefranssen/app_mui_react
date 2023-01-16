import React from 'react'
import { Button  as Muibutton } from '@mui/material'


// const themeUstyles = createTheme(theme =>({
//     root: {
//         margin: theme.spacing(0.5), 
//     },
//     label: {
//         textTransform: 'none',
//     },
// }));

const Button = (props) => {
    const { text, size, color, variant, onClick, ...other } = props
    return (
        <Muibutton
            sx={{ 
                mt: 1,
                textTransform: 'none'
            }}
            variant={variant || 'contained'}
            size={size || 'large'}
            color={color}
            onClick={onClick}
            {...other}
            >
            {text}
        </Muibutton>
    )
}

export default Button
