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

    [theme.breakpoints.between('tablet', 'laptop')]: {
        maxWidth: '600px' 
    },

    [theme.breakpoints.down('tablet')]: {
        maxWidth: '400px' 
    },

    [theme.breakpoints.down('mobileL')]: {
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

    [theme.breakpoints.down(theme.breakpoints.values.laptop)]: {
        margin: "auto 100px"
    }
}))

export const ResultHeader = muiStyled(Box)(({ theme }) => ({
    display: 'flex',   
    position: "relative",
    top: 150, 
    margin: "auto 192px",
    justifyContent: "space-between",

    [theme.breakpoints.down(theme.breakpoints.values.laptop)]: {
        margin: "auto 100px" 
    }, 

    [theme.breakpoints.between(theme.breakpoints.values.mobileS, theme.breakpoints.values.tablet)]: {
        flexDirection: "column",
    }
}));

export const ResultDiv = muiStyled(Box)(() => ({
    
}));

export const FooterContainer = muiStyled(Grid)(({ theme: { palette: { primary } }}) => ({
    backgroundColor: primary.dark,
    height: "100%"
}));

export const HeaderButtons = muiStyled(Box)(({ theme }) => ({
    [theme.breakpoints.down('tablet')]: {
        marginTop: "20px"
    },
}));