import React from 'react';
import Header from '../components/header';
import { Box, Typography, Button } from '@mui/material';
import AddInvoices from '../components/addInvoices';

const Home = () =>{
    return (
       <>
        <Header/>
        <Box style={ {margin : 20} } >
            <Typography variant='h4'>Pending Invoices</Typography>
            <Button variant='outlined' style={{ marginTop:15 }}>Add Invoice</Button>
            <AddInvoices />
        </Box>
       </>
    )
}

export default Home;