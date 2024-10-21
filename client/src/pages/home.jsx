import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import { Box, Typography, Button } from '@mui/material';
import AddInvoices from '../components/addInvoices';
import Invoices from '../components/Invoices';
import { getAllInvoices,deleteInvoice } from '../services/api';

const Home = () =>{
    const [addInvoices, setAddInvoices] = useState(false);
    const [invoices, setInvoices] = useState([]);
    
    useEffect(() => {
        const getData = async () => {
            const response = await getAllInvoices();
           
            setInvoices(response.data);

        }
        getData();
    },[addInvoices])
    
    const toggleInvoice = () =>{
        setAddInvoices(true);
    }

    const removeInvoice = async (id) => {
        await deleteInvoice(id);
        
        const updateInvoice = invoices.filter(invoice => invoice.id != id);
        setInvoices(updateInvoice);
    }

    return (
       <>
        <Header/>
        <Box style={ {margin : 20} } >
            <Typography variant='h4'>Pending Invoices</Typography>
            { !addInvoices && <Button variant='outlined' style={{ marginTop:15 }} onClick={ () => toggleInvoice()}>Add Invoice</Button> }
            {addInvoices && <AddInvoices setAddInvoices={setAddInvoices}/>}
            <Box style={ {marginTop : 20} }>
                <Invoices invoices={invoices}
                    removeInvoice={removeInvoice}
                />
            </Box>
        </Box>
       </>
    )
}

export default Home;