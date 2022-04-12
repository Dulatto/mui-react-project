import { createTheme } from '@mui/material/styles';

const arcBlue = '#0B72B9';
const arcOrange = '#FFBA60';

export default createTheme({
    palette: {
        common: {
            blue: '#0B72B9',
            orange: '#FFBA60'
        },
        primary: {
            main: '#0B72B9'
        },
        secondary: {
            main: '#FFBA60'
        }
    },
    typography: {
        tab: {
            fontFamily: 'Raleway!important',
            textTransform: 'none!important',
            fontWeight: '700!important',
            color: 'white!important',
            fontSize: '0.85rem!important',

        },
        estimate: {
            fontFamily: 'Pacifico!important',
            fontSize: '1rem!important',
            textTransform: 'none!important',
        }
    }
})