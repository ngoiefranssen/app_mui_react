import { Table, TableCell, TableHead, TablePagination, TableRow, TableSortLabel } from '@mui/material';
import React from 'react'

const UseTable = (records, headCells) => {

    const pages = [5, 10, 25];
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(pages[page]);
    const [order, setOrder] = React.useState();
    const [orderBy, setOrderBy] = React.useState();
    
    const TabContainer = (props) =>{
        
            <Table sx={{ bgColor: '#e8eaf6' }}>{props.children}</Table>
    }
    const TabHead = () => {
        const handleSortReset = () => {
            
        }
        return(
            <TableHead>
                <TableRow>
                    {
                        headCells.map((headCell) => (
                            <TableCell key={headCell.id}>
                                <TableSortLabel 
                                    onClick={ () => { handleSortReset(headCell.id) }}
                                >
                                    {headCell.label}
                                </TableSortLabel>
                            </TableCell>
                        ))
                    };
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
    };
    const recordsAfterPaginAndSorting = () => {
        return records.slice(page*rowsPerPage, (page+1)*rowsPerPage);
    };
    return {
        TabContainer,
        TabHead,
        TabPagination,
        recordsAfterPaginAndSorting,
    };
};

export default UseTable