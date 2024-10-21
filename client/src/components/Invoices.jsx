import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, styled, Typography } from '@mui/material';

const StyledTable = styled(Table)({
    width: '80%',
    margin: 20,
    marginTop: 40,
    '& > thead > tr > th' :{
        background : '#03a9f4',
        fontSize:18,
    },
    '& > tbody > tr > td':{
        fontSize: 16,
    },
    '& > tbody > p':{
        fontSize: 18,
        marginTop: 20,
    }
})



const Invoices = ({invoices, removeInvoice}) => {

    return(
        
            <StyledTable>
                <TableHead>
                    <TableRow>
                        <TableCell><b>VENDOR</b></TableCell>
                        <TableCell><b>PRODUCT</b></TableCell>
                        <TableCell><b>AMOUNT</b></TableCell>
                        <TableCell><b>DATE</b></TableCell>
                        <TableCell><b>STATUS</b></TableCell>
                        <TableCell><b>ACTION</b></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        invoices && Array.isArray(invoices) && invoices.length>0 ? 
                        
                        invoices.map(invoice => (
                            <TableRow>
                                <TableCell>{invoice.vendor}</TableCell>
                                <TableCell>{invoice.product}</TableCell>
                                <TableCell>{invoice.amount}</TableCell>
                                <TableCell>{invoice.date}</TableCell>
                                <TableCell>{invoice.action}</TableCell>
                                <TableCell>
                                    <Button variant="contained" color="success" onClick={() => removeInvoice(invoice.id)}>Mark Done</Button>
                                </TableCell>
                            </TableRow>
                        ))
                        :
                        <Typography>No Pending Invoices</Typography>
                    }   
                </TableBody>
            </StyledTable>
        
    )
}

export default Invoices;