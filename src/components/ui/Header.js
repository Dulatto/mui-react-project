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
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

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
        marginBottom: '1em',
        [theme.breakpoints.down('md')]: {
            marginBottom: '0.3em'
        },
        [theme.breakpoints.down('xs')]: {
            marginBottom: '0.2em'
        }
    },
    logo: {
        height: '6em',
        [theme.breakpoints.down('md')]: {
            height: '4.7em'
        },
        [theme.breakpoints.down('xs')]: {
            height: '3.5em'
        }
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
        color: 'white!important',
        borderRadius: '0px!important'
    },
    menuItem: {
        ...theme.typography.tab,
        opacity: '0.7!important',
        '&:hover': {
            opacity: '1.0!important',
        }
    },
    drawerIcon: {
        height: '30px!important',
        width: '30px!important',
    },
    drawerIconContainer: {
        marginLeft: 'auto!important',
        '&:hover': {
            backgroundColor: 'transparent'
        }
    },
    drawer: {
        backgroundColor: '#0B72B9!important'
    },
    drawerItem: {
        ...theme.typography.tab,
        color: 'white!important',
        opacity: '0.7!important'
    },
    drawerItemEstimate: {
        backgroundColor: '#FFBA60!important',
    },
    drawerItemSelected: {
        '& .MuiListItemText-root': {
            opacity: '1.0!important'
        },

    },
    appbar: {
        zIndex: theme.zIndex.modal + 1
    }
}));

function Header(props) {
    const classes = useStyles();
    const theme = useTheme();
    const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    const [openDrawer, setOpenDrawer] = useState(false);
    const [value, setValue] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);
    const [openMenu, setOpenMenu] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0)

    const handleChange = (e, newValue) => {
        setValue(newValue)
    };
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
        setOpenMenu(true)
    }
    const handleMenuItemClick = (e, i) => {
        setAnchorEl(null);
        setOpenMenu(false);
        setSelectedIndex(i);
    }

    const handleClose = (e) => {
        setAnchorEl(null);
        setOpenMenu(false)
    }

    const menuOptions = [
        { name: 'Services', link: '/services', activeIndex: 1, selectedIndex: 0 },
        { name: 'Custom Software Development', link: '/customsoftware', activeIndex: 1, selectedIndex: 1 },
        { name: 'Mobile App Development', link: '/mobileapps', activeIndex: 1, selectedIndex: 2 },
        { name: 'Website Development', link: '/websites', activeIndex: 1, selectedIndex: 3 }
    ]

    const routes = [
        { name: 'Home', link: '/', activeIndex: 0 },
        {
            name: 'Services', link: '/services', activeIndex: 1,
            ariaOwns: anchorEl ? 'simple-menu' : undefined, ariaPopup: anchorEl ? 'true' : undefined,
            mouseOver: event => handleClick(event)
        },
        { name: 'The Revolution', link: '/revolution', activeIndex: 2 },
        { name: 'About Us', link: '/about', activeIndex: 3 },
        { name: 'Contact Us', link: '/contact', activeIndex: 4 }
    ]

    useEffect(() => {
        [...menuOptions, ...routes].forEach(route => {
            switch (window.location.pathname) {
                case `${route.link}`:
                    if (value !== route.activeIndex) {
                        setValue(route.activeIndex)
                        if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
                            setSelectedIndex(route.selectedIndex)
                        }
                    }
                    break;
                default:
                    break;
            }
        })
    }, [value, menuOptions, selectedIndex, routes]);

    const tabs = (
        <React.Fragment>
            <Tabs
                value={value}
                onChange={handleChange}
                className={classes.tabContainer}
                indicatorColor='secondary'>
                {routes.map((route, index) => (
                    <Tab
                        key={`${route}${index}`}
                        className={classes.tab}
                        component={Link}
                        to={route.link}
                        label={route.name}
                        aria-owns={route.ariaOwns}
                        aria-haspopup={route.ariaPopup}
                        onMouseOver={route.mouseOver} />
                ))}
            </Tabs>

            <Button variant='contained' color='secondary' className={classes.button}>
                Free Estimate
            </Button>
            <Menu
                id='simple-menu'
                anchorEl={anchorEl}
                open={openMenu}
                onClose={handleClose}
                classes={{ paper: classes.menu }}
                MenuListProps={{ onMouseLeave: handleClose }}
                elevation={0}
                keepMounted>
                {menuOptions.map((option, i) => (
                    <MenuItem
                        key={option}
                        component={Link}
                        to={option.link}
                        classes={{ root: classes.menuItem }}
                        onClick={(event) => { handleMenuItemClick(event, i); setValue(1); handleClose() }}
                        selected={i === selectedIndex && value === 1}>
                        {option.name}
                    </MenuItem>
                ))}
            </Menu>
        </React.Fragment>
    )

    const drawer = (
        <React.Fragment>
            <SwipeableDrawer
                disableBackdropTransition={!iOS}
                disableDiscovery={iOS}
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                onOpen={() => setOpenDrawer(true)}
                classes={{ paper: classes.drawer }}
            >
                <div className={classes.toolbarMargin} />
                <List disablePadding>
                    {routes.map(route => (
                        <ListItem
                            key={`${route}${route.activeIndex}`}
                            divider
                            button
                            component={Link}
                            to={route.link}
                            selected={value === route.activeIndex}
                            classes={{ selected: classes.drawerItemSelected }}
                            onClick={() => { setOpenDrawer(false); setValue(route.activeIndex) }}
                        >
                            <ListItemText disableTypography className={classes.drawerItem}>{route.name}</ListItemText>
                        </ListItem>
                    ))}
                    <ListItem onClick={() => { setOpenDrawer(false); setValue(5) }} divider button component={Link} to='/estimate' classes={{ root: classes.drawerItemEstimate, selected: classes.drawerItemSelected }} selected={value === 5}>
                        <ListItemText disableTypography className={classes.drawerItem}>Free Estimate</ListItemText>
                    </ListItem>
                </List>
            </SwipeableDrawer>
            <IconButton className={classes.drawerIconContainer} onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
                <MenuIcon className={classes.drawerIcon} />
            </IconButton>
        </React.Fragment>
    )

    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar position='fixed' className={classes.appbar}>
                    <Toolbar disableGutters >
                        <Button component={Link} to='/' disableRipple className={classes.logoContainer} onClick={() => setValue(0)}>
                            <img alt='logo' className={classes.logo} src={logo} />
                        </Button>
                        {matches ? drawer : tabs}
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </React.Fragment>
    );
}

export default Header
