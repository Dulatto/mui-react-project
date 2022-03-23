import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { makeStyles } from '@mui/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';

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
    },
    tabContainer: {
        marginLeft: 'auto'
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: '20px!important'
    },
    button: {
        borderRadius: '50px!important',
        marginLeft: '50px!important',
        marginRight: '25px!important',
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
                        <Tabs className={classes.tabContainer}>
                            <Tab className={classes.tab} label='Home' />
                            <Tab className={classes.tab} label='Services' />
                            <Tab className={classes.tab} label='The Revolution' />
                            <Tab className={classes.tab} label='About Us' />
                            <Tab className={classes.tab} label='Save Us' />
                        </Tabs>
                        <Button variant='contained' color='secondary' className={classes.button}>
                            Free Estimate
                        </Button>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </React.Fragment>
    );
}

export default Header
