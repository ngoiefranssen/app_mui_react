import { Grid } from '@mui/material';
import React from 'react'
import {UserForm, Form} from '../Components/UserForm';
import * as EmployeeServices from '../Services/EmployeeServices' 
import Controller from '../Components/Controls/Controller';

const genderItems = [
  { id: 'male', title:'Male' },
  { id: 'female', title:'Female' },
  { id: 'other', title:'Other' },
];

const initialValues = {
  id: 0,
  fullname: '',
  email: '',
  mobile: '',
  city: '',
  gender: 'male',
  departmentId: '',
  hireDate: new Date(),
  isPermanent: false,
}

const EmployeeForm = () => {

  // const theme = createTheme({})
  const validate = (fieldValues = values) =>{
    let temp = {...errors}
    if('fullname' in fieldValues){
      temp.fullname = fieldValues.fullname ? "" : "This field is required."
    }
    if('email' in fieldValues){
      temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not correct."
    }
    if('mobile' in fieldValues){
      temp.mobile = fieldValues.mobile.length >= 9 ? "" : "Minimum 10 numbers required."
    }
    if('depatmendId' in fieldValues){
      temp.depatmendId = values.depatmendId.length != 0 ? "" : "This field is required."
    }

    setErrors({
      ...temp
    });
    if(fieldValues == values)
      return Object.values(temp).every((x)=> x == "");
  }

  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm,
  } = UserForm(initialValues, true, validate); // ,validateOnChange=true, 

  const handleSubmit = (e) => {
    e.preventDefault();
    if(validate()){
      EmployeeServices.insertEmployee(values);
      resetForm();
    }
  }
    
  return (
    <Form onSubmit={handleSubmit}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Controller.InputController
            label='Full name'
            name='fullname'
            value={values.fullname}  
            onChange={handleInputChange}
            error={errors.fullname}
          />
          <Controller.InputController
            label='Email'
            name='email'
            value={values.email}
            onChange={handleInputChange}
            error={errors.email}
          />
           <Controller.InputController
            label='Mobile'
            name='mobile'
            value={values.mobile}
            onChange={handleInputChange}
            error={errors.mobile}
          />
           <Controller.InputController
            label='City'
            name='city'
            value={values.city}
            onChange={handleInputChange}
            error={errors.city}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller.RadioGroup 
            name='gender'
            label='Gender'
            value={values.gender}
            onChange={handleInputChange}
            items={genderItems}
          />
          <Controller.Select
            name='departmentId'
            label='Department'
            value={values.departmentId}
            onChange={handleInputChange}
            options={EmployeeServices.getDepartmentCollection()}
            error={errors.departmentId}
          />
          <Controller.DatePicker
            name='hireDate'
            label='Hire Date'
            value={values.hireDate}
            onChange={handleInputChange}
          />
          <Controller.Checkbox
            name='isPermanent'
            label='Permanent Employee'
            value={values.isPermanent}
            onChange={handleInputChange}
          />
          <div>
            <Controller.Button type='submit' color='primary' text='Resgister' sx={{ ml:'20px' }} />
            <Controller.Button text='Reset' onClick={resetForm}/>
          </div>
        </Grid>
      </Grid>
    </Form>
   
  )
}

export default EmployeeForm