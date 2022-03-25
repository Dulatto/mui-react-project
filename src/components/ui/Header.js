import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { makeStyles } from '@mui/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

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
        height: '6em'
    },
    logoContainer: {
        padding: '0!important',
        '&:hover': {
            backgroundColor: 'transparent'
        }
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
        ...theme.typography.estimate,
        borderRadius: '50px!important',
        marginLeft: '50px!important',
        marginRight: '25px!important',
        height: '45px!important',
    },
    menu: {
        backgroundColor: '#0B72B9!important',
        color: 'white!important'
    }
}));

function Header(props) {
    const classes = useStyles()
    const [value, setValue] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false)

    const handleChange = (e, value) => {
        setValue(value)
    };
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
        setOpen(true)
    }

    const handleClose = (e) => {
        setAnchorEl(null);
        setOpen(false)
    }

    useEffect(() => {
        if (window.location.pathname === '/' && value !== 0) {
            setValue(0)
        } else if (window.location.pathname === '/services' && value !== 1) {
            setValue(1)
        } else if (window.location.pathname === '/revolution' && value !== 2) {
            setValue(2)
        } else if (window.location.pathname === '/about' && value !== 3) {
            setValue(3)
        } else if (window.location.pathname === '/contact' && value !== 4) {
            setValue(4)
        } else if (window.location.pathname === '/estimate' && value !== 5) {
            setValue(5)
        }
    }, [value]);

    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar position='fixed' >
                    <Toolbar disableGutters >
                        <Button component={Link} to='/' disableRipple className={classes.logoContainer} onClick={() => setValue(0)}>
                            <img alt='logo' className={classes.logo} src={logo} />
                        </Button>
                        <Tabs value={value} onChange={handleChange} className={classes.tabContainer} indicatorColor='secondary'>
                            <Tab className={classes.tab} component={Link} to='/' label='Home' />
                            <Tab
                                aria-owns={anchorEl ? 'simple-menu' : undefined}
                                aria-haspopup={anchorEl ? 'true' : undefined}
                                className={classes.tab}
                                component={Link}
                                onMouseOver={(event) => handleClick(event)}
                                to='/services'
                                label='Services' />
                            <Tab className={classes.tab} component={Link} to='/revolution' label='The Revolution' />
                            <Tab className={classes.tab} component={Link} to='/about' label='About Us' />
                            <Tab className={classes.tab} component={Link} to='/contact' label='Contact Us' />
                        </Tabs>

                        <Button variant='contained' color='secondary' className={classes.button}>
                            Free Estimate
                        </Button>
                        <Menu
                            id='simple-menu'
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            classes={{ paper: classes.menu }}
                            MenuListProps={{ onMouseLeave: handleClose }}
                            elevation={0}>
                            <MenuItem
                                onClick={() => { handleClose(); setValue(1) }}
                                component={Link}
                                to='/services'
                                classes={{ root: classes.menuItem }}
                            >Services</MenuItem>
                            <MenuItem
                                onClick={() => { handleClose(); setValue(1) }}
                                component={Link}
                                to='/customsoftware'
                            >Custom Software Development</MenuItem>
                            <MenuItem onClick={() => { handleClose(); setValue(1) }} component={Link}
                                to='/mobileapps'>Mobile App Development</MenuItem>
                            <MenuItem onClick={() => { handleClose(); setValue(1) }} component={Link}
                                to='/websites'>Website Development</MenuItem>
                        </Menu>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </React.Fragment>
    );
}

export default Header
