import { TextField } from '@mui/material'
import React from 'react'

const InputController = (props) => {

  const { name, label, value, error=null, onChange, ...other } = props
  return (
    <TextField
      variant='outlined'
      label={label}
      name={name}
      value={value} 
      onChange={onChange}
      // error
      // helperText="Incorrect entry."
      {...other}
      { ...(error && { error:true, helperText:error })}

    />
  )
}

export default InputController
