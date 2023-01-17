import {
    Table,
    TableCell,
    TableHead,
    TablePagination,
    TableRow,
    TableSortLabel 
} from '@mui/material';
import React from 'react'

const UseTable = (records, headCells, filter) => {

    const pages = [5, 10, 25];
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(pages[page]);
    const [order, setOrder] = React.useState();
    const [orderBy, setOrderBy] = React.useState();
    
    const TabContainer = (props) =>{
        <Table sx={{ bgColor: '#e8eaf6' }}>{props.children}</Table>
    }
    const TabHead = () => {
        const handleSortRequest = (cellId) => {
            const isAsc = orderBy === cellId && order === 'asc'
            setOrder(isAsc ? 'desc' : 'asc')
            setOrderBy(cellId) 
        }
        return(
            <TableHead>
                <TableRow>
                    {
                        headCells.map((headCell) => (
                            <TableCell
                                key={headCell.id}
                                sortDirection={orderBy === headCell.id ? order : false}
                            >
                                    {
                                        headCell.disableSorting ? headCell.label :
                                        <TableSortLabel
                                            active={ orderBy === headCell.id }
                                            direction={ 
                                                orderBy === headCell.id ? order : 'asc'
                                            }
                                            onClick={ () => {
                                                handleSortRequest(headCell.id) 
                                            }}
                                        >
                                            {headCell.label}
                                        </TableSortLabel>
                                    }
                            </TableCell>
                        ))
                    }
                </TableRow>
            </TableHead>
        )
    };

    const handleChangePage = (event, newPage) =>
    {
        setPage(newPage);
    }
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    }
    const TabPagination = () => {
        <TablePagination
            component='div'
            page = {page}
            rowsPerPageOptions = {pages}
            rowsPerPage = {rowsPerPage}
            count = {records.length}
            onPageChange = {handleChangePage}
            onRowsPerPageChange = {handleChangeRowsPerPage}
        />
    }

    const stablesort = (arry, comparator) =>{
        const stabilizedThis = arry.map((cel, index) => [cel, index]);
        stabilizedThis.sort((a, b) => {
            const order = comparator(a[0], b[0])
            if(order !== 0) return order
            return a[1] - b[1]
        })
        return stabilizedThis.map((cel) => cel[0])
    }
    const getComparator = () => {
        return order === 'desc'
            ? (a, b) => descendingComparator(a, b, orderBy)
            : (a, b) => -descendingComparator(a, b, orderBy)
    }
    const descendingComparator = (a, b, orderBy) => {
        if(b[orderBy] < a[orderBy]){
            return -1
        }
        if(b[orderBy] > a[orderBy]) {
            return 1
        }
        return 0
    }
    // const -descendescendingComparator = () => {

    // }
    const recordsAfterPaginAndSorting = () => {
        return stablesort(filter.fn(records), getComparator(order, orderBy)).slice(
            page*rowsPerPage, (page + 1)*rowsPerPage)
    }
    return {
        TabContainer,
        TabHead,
        TabPagination,
        recordsAfterPaginAndSorting,
    }
}
export default UseTable