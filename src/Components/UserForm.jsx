import { Box } from '@mui/material';
import React from 'react'

export const UserForm  = (initialValues, validateOnChange=false, validateDatas) => {

    const [values, setValues] = React.useState(initialValues);
    const [errors, setErrors] = React.useState({})
    
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setValues({
          ...values,
          [name] : value
        })
        if(validateOnChange){
            validateDatas({ [name] : value })
        } 
      }

    const resetForm = () => {
        setValues(initialValues)
        setErrors({})
    }
    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm,
    };
};
// const useStyles = createTheme((theme) => ({
//   root: {
//     '& .MuiFormControl-root': {
//       width: '80%',
//       margin: theme.spacing(1),
//       },
//     }
//   }));

export const Form = (props) =>{
    const { children, ...other } = props
    
    return(
        <div style={{ with: '100%' }}>
            <Box 
                sx={{
                    display: 'grid',
                    columnGap: 2,
                    rowGap: 1,
                    gridTemplateColumns: 'repeat(2, 1fr)',
                }}
            >
                <form autoComplete='off' {...other}>
                    {props.children}
                </form>
            </Box>
        </div>
        
    );
}