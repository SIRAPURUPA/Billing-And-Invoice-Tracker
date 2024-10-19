import React from 'react'
import { Box, Typography, TextField, styled, Button } from '@mui/material';

const Component = styled(Box)({
    marginTop: 20
})

const AddInvoices = () => {
  return (
    <Component>
      <Typography>Add Invoice</Typography>
      <Box>
        <TextField
            variant='standard'
            placeholder='Enter Vendor Name'
        />
        <TextField
            variant='standard'
            placeholder='Enter Product Name'
        />
        <TextField
            variant='standard'
            placeholder='Enter Amount (in Rs)'
            type='number'
        />
        <TextField
            variant='standard'
            placeholder='Enter Date'
            type='date'
        />
        <Button variant="contained">Add Invoice</Button>
      </Box>
    </Component>
  )
}

export default AddInvoices;