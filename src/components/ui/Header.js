import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

function Header(props) {
    return (
        <AppBar position='fixed'>
            <Toolbar>JS Development</Toolbar>
        </AppBar>
    )
}

export default Header
