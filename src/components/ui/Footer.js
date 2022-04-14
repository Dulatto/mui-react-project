import React from 'react'
import { makeStyles } from '@mui/styles';

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
    }
}))



export default function Footer() {
    const classes = useStyles()
    return (
        <footer className={classes.footer}>
            <img alt='black decor' src={footerAdornment} className={classes.adornment} />
        </footer>
    )
}
