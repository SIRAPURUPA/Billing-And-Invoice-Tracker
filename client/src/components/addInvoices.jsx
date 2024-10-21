import React from 'react';
import { useState } from 'react';
import { Box, Typography, TextField, styled, Button } from '@mui/material';
import { saveInvoice } from '../services/api';

const Component = styled(Box)({
    marginTop: 20,
    '& > p' : {
      fontSize : 20,
      marginBottom : 10
    },

    '& > div > div' : {
      marginRight : 20,
      minWidth : 200,
    }
})

const defaultObj = {
  vendor: '',
  product: '',
  amount: 0,
  date: '',
  action : 'pending',
}
const AddInvoices = ({ setAddInvoices }) => {

  const [invoice, setInvoice] = useState(defaultObj);
  const onValueChange = (e) => {
    setInvoice({...invoice, [e.target.name]: e.target.value});
  }
  const addNewInvoice = async () => {
    await saveInvoice({...invoice, amount: Number(invoice['amount'])});

    setAddInvoices(false);
  }
  
  return (
    <Component>
      <Typography>Add Invoice</Typography>
      <Box>
        <TextField
            variant='standard'
            placeholder='Enter Vendor Name'
            onChange={ (e) => onValueChange(e)}
            name="vendor"
            autoComplete='off'
        />
        <TextField
            variant='standard'
            placeholder='Enter Product Name'
            onChange={ (e) => onValueChange(e)}
            name="product"
            autoComplete='off'
        />
        <TextField
            variant='standard'
            placeholder='Enter Amount (in Rs)'
            type='number'
            onChange={ (e) => onValueChange(e)}
            name="amount"
            autoComplete='off'
        />
        <TextField
            variant='standard'
            placeholder='Enter Date'
            type='date'
            onChange={ (e) => onValueChange(e)}
            name="date"
            autoComplete='off'
        />
        <Button variant="contained" onClick={()=>addNewInvoice()}>Add Invoice</Button>
      </Box>
    </Component>
  )
}

export default AddInvoices;