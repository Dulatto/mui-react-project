import React from 'react'
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom'

import footerAdornment from '../../assets/Footer Adornment.svg';

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.common.blue,
        width: '100%',
        // zIndex: 1302,
        // position: 'relative'
    },
    adornment: {
        width: '23em',
        verticalAlign: 'bottom!important',
        [theme.breakpoints.down('md')]: {
            width: '19em'
        },
        [theme.breakpoints.down('xs')]: {
            width: '13em'
        }
    },
    mainContainer: {
        position: 'absolute',
    },
    link: {
        color: 'white',
        fontFamily: 'Arial',
        fontSize: '0.75rem',
        fontWeight: 'bold',
        textDecoration: 'none'
    },
    gridItem: {
        margin: '3em!important'
    }
}))



export default function Footer(props) {
    const classes = useStyles()
    return (
        <footer className={classes.footer}>
            <Grid container justifyContent='center' className={classes.mainContainer} >
                <Grid item className={classes.gridItem}>
                    <Grid container direction='column' spacing={2}>
                        <Grid item component={Link} onClick={() => props.setValue(0)} to='/' className={classes.link}>
                            Home
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction='column' spacing={2}>
                        <Grid item component={Link} to='/services' onClick={() => { props.setValue(1); props.setSelectedIndex(0) }} className={classes.link}>
                            Services
                        </Grid>
                        <Grid item component={Link} to='/customsoftware' onClick={() => { props.setValue(1); props.setSelectedIndex(1) }} className={classes.link}>
                            Custom Software Development
                        </Grid>
                        <Grid item component={Link} to='/mobileapps' onClick={() => { props.setValue(1); props.setSelectedIndex(2) }} className={classes.link}>
                            Mobile App Development
                        </Grid>
                        <Grid item component={Link} to='/websites' onClick={() => { props.setValue(1); props.setSelectedIndex(3) }} className={classes.link}>
                            Website Development
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction='column' spacing={2}>
                        <Grid item component={Link} to='/revolution' onClick={() => props.setValue(2)} className={classes.link}>
                            The Revolution
                        </Grid>
                        <Grid item component={Link} to='/revolution' onClick={() => props.setValue(2)} className={classes.link}>
                            Vision
                        </Grid>
                        <Grid item component={Link} to='/revolution' onClick={() => props.setValue(2)} className={classes.link}>
                            Technology
                        </Grid>
                        <Grid item component={Link} to='/revolution' onClick={() => props.setValue(2)} className={classes.link}>
                            Proccess
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction='column' spacing={2}>
                        <Grid item component={Link} to='/about' onClick={() => props.setValue(3)} className={classes.link}>
                            About Us
                        </Grid>
                        <Grid item component={Link} to='/about' onClick={() => props.setValue(3)} className={classes.link}>
                            History
                        </Grid>
                        <Grid item component={Link} to='/about' onClick={() => props.setValue(3)} className={classes.link}>
                            Team
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction='column' spacing={2}>
                        <Grid item component={Link} to='/contact' onClick={() => props.setValue(4)} className={classes.link}>
                            Contact Us
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <img alt='black decor' src={footerAdornment} className={classes.adornment} />
        </footer>
    )
}
