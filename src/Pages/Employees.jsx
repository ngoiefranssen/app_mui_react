import React from 'react'
import EmployeeForm from './EmployeeForm'
import PageHeader from '../Components/PageHeader';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import { InputAdornment, Paper, TableBody, TableCell, TableRow } from '@mui/material';
import UseTable from '../Components/UseTable';
import * as EmployeeServices from '../Services/EmployeeServices' 
import Controller from '../Components/Controls/Controller';
import { Add, Search } from '@mui/icons-material';
import DialoguePup from '../Components/Controls/DialoguePup';

// const useStyles = createTheme((theme) => ({ useTheme
//     root: {
//       '& .MuiFormControl-root': {
//         margin: theme.spacing(5),
//         padding: theme.spacing(3),
//         },
//       }
//     }));

const headCells =[
  {id: 'fullname', label: 'Name Employee'},
  {id: 'email' , label: 'Email Address (Person)'},
  {id: 'mobile' , label: 'Mobile Number'},
  {id: 'department' , label: 'Department', disableSorting : true },
];

const Employees = () => {

  const [records, setRecords] = React.useState(EmployeeServices.getAllEmployee())
  const [filter, setFilter] = React.useState({ fn: (items) => { return items } })
  const [openPopup, setOpenPopup] = React.useState(false)
  const {
    TabContainer,
    TabHead,
    TabPagination,
    recordsAfterPaginAndSorting
  } = UseTable(records, headCells, filter)

// Search Employee 
  const handleSearchChange = (e) => {
    let target = e.target
    setFilter({
      fn: (items) => {
        if(target.value = '')
          return items
        else
          return items.filter((x) => x.fullname.toLowerCase().includes(target.value))
      }
    })
  }
  return (
    <>
      <PageHeader
          title='New Employee'
          subtitle='Form design with validation'
          icon={<PeopleOutlineIcon fontSize='large' />}
      />
      <Paper>  {/*sx={{ margin: spacing(5), /* '8px auto  padding: spacing(3) }} */}
          <Toolbar>
            <Controller.InputController
              sx={{ width : '75%' }}
              label='Search Employee' 
              InputProps= {{
                startAdornment: (
                  <InputAdornment position='start'>
                    <Search />
                  </InputAdornment>
                  )
              }}
              onChange={handleSearchChange}
            />
            <Controller.Button 
              sx={{ position:'absolute', right:'10px' }}
              text='Add new'
              variant='outlined'
              startIcon={<Add />}
              onClick={ () => setOpenPopup(true) }
            />
          </Toolbar>
          <TabContainer>
          <TabHead />
            <TableBody>
              {
                recordsAfterPaginAndSorting().map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.fullname}</TableCell>
                    <TableCell>{item.email}</TableCell>
                    <TableCell>{item.mobile}</TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </TabContainer>
          <TabPagination />
      </Paper>
      <DialoguePup
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <EmployeeForm />
      </DialoguePup>   
    </>
  )
}

export default Employees