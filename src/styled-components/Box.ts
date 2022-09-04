import { Grid, styled as muiStyled } from "@mui/material";
// import styled from '@emotion/styled'
import Box from "@mui/material/Box";
import Container from '@mui/material/Container';

export const FormContainer = muiStyled(Box)(({ theme }) => ({
    position: "relative",
    margin: "auto",
    backgroundColor: "white",
    top: "-160px",
    maxWidth: '1072px',
    fontFamily: "Galano Grotesque",
    fontSize: "36px",
    boxShadow: "0px 2px 8px 8pxrgba(26, 24, 30, 0.06)",
    borderRadius: "8px",
    marginBottom: "-160px",

    [theme.breakpoints.between('md', 'lg')]: {
        maxWidth: '600px' 
    },

    [theme.breakpoints.down('md')]: {
        maxWidth: '400px' 
    },

    [theme.breakpoints.down('sm')]: {
        top: 0
    },
}))

const FormDiv2 = muiStyled(Box)`
    h5 {
        margin: "16px auto 30px auto",
        fontWeight: 400,
        fontSize: "23px",
        color: "#4D4D4D",
    },
    label {
        fontSize: "16px"
    }
`;

export const FormDiv = muiStyled(FormDiv2)(({ theme }) => ({
    position: "relative",
    margin: "auto 192px",
    top: "64px",
    lineHeight: 1.6,

    [theme.breakpoints.down(theme.breakpoints.values.lg)]: {
        margin: "auto 100px"
    },

    [theme.breakpoints.down(theme.breakpoints.values.lg)]: {
        margin: "auto 50px"
    }
}))

export const ResultHeader = muiStyled(Box)(({ theme }) => ({
    display: 'flex',   
    position: "relative",
    top: 150, 
    margin: "auto 192px",
    justifyContent: "space-between",

    [theme.breakpoints.down(theme.breakpoints.values.lg)]: {
        margin: "auto 100px" 
    }, 

    [theme.breakpoints.down(theme.breakpoints.values.md)]: {
        flexDirection: "column",
        margin: "auto 50px"
    }
}));

export const ResultDiv = muiStyled(Box)(() => ({
    
}));

export const FooterContainer = muiStyled(Grid)(({ theme }) => ({
    height: "70%",
    padding: "0 100px",
    alignContent: 'center',

    [theme.breakpoints.down(theme.breakpoints.values.sm)]: { 
        padding: "0px 30px"
    }, 
}));

export const ProductContainer = muiStyled(Grid)(({ theme }) => ({
    [theme.breakpoints.down(theme.breakpoints.values.md)]: {
        padding: 0,
        textAlign: "center"
    }, 

    [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
        padding: 0,
        textAlign: "center"
    }
}));

export const HeaderButtons = muiStyled(Box)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        marginTop: "20px"
    },
}));
