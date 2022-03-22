import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { makeStyles } from '@mui/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import logo from '../../assets/logo.svg'

function ElevationScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: '1em'
    },
    logo: {
        height: '5em'
    }
}));

function Header(props) {

    const classes = useStyles()
    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar position='fixed' >
                    <Toolbar disableGutters>
                        <img alt='logo' className={classes.logo} src={logo} />
                        <Tabs>
                            <Tab label='Home' />
                            <Tab label='Services' />
                            <Tab label='The Revolution' />
                            <Tab label='About Us' />
                            <Tab label='Save Us' />
                        </Tabs>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </React.Fragment>
    );
}

export default Header
