import React from 'react'
import EmployeeForm from './EmployeeForm'
import PageHeader from '../Components/PageHeader';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import { Paper, TableBody, TableCell, TableRow } from '@mui/material';
import UseTable from '../Components/UseTable';
import * as EmployeeServices from '../Services/EmployeeServices' 

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
  {id: 'department' , label: 'Department'},
];

const Employees = () => {

  const [records, setRecords] = React.useState(EmployeeServices.getAllEmployee())
  const {
    TabContainer,
    TabHead,
    TabPagination,
    recordsAfterPaginAndSorting
  } = UseTable(records, headCells)
  return (
    <>
      <PageHeader
          title='New Employee'
          subtitle='Form design with validation'
          icon={<PeopleOutlineIcon fontSize='large' />}
      />
      <Paper rowSpacing={5} columnSpacing={3}>  {/*sx={{ margin: spacing(5), /* '8px auto  padding: spacing(3) }} */}
          <EmployeeForm />
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
    </>
  )
}

export default Employees