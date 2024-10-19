
import React from 'react';
import {AppBar, Toolbar} from '@mui/material' ;
import logo from '../images/InvoiceLogo.png';

function Header() {
  return (

    <AppBar position="static" color='info'>
      <Toolbar>

        <img src={logo} alt="" width={50}/>
        <h2>Billing and Invoice Tracker</h2>
      </Toolbar>
    </AppBar>
  )
}

export default Header;