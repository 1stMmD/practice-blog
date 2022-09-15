
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
  
// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
        black: {
            light:"#707070",
            main:"#505050",
            dark:"#252525",
        },
        grey : {
            light :"#F2F2F2",
            main:"#858585",
            dark : "#999999"
        },
        blue : {
            main :"#67A6FF",
        },
        white : {
            main : "#fff",
        }
    },
    breakpoints:{
        values : {
            xs : 0,
            sm : 380,
            md : 600,
            lg : 900,
            xl : 1200
        }
    },
    typography:{
        fontFamily:[
            "Noto Sans"
        ].join(",")
    }
});
  
export default theme;