import { Grid, styled as muiStyled } from "@mui/material";
// import styled from '@emotion/styled'
import Box from "@mui/material/Box";
import Container from '@mui/material/Container';

export const FormContainer = muiStyled(Container)`
    position: absolute;
    height: 1430px;
    width: 1120px;
    background-color: white;
    top: 160px;
    left: 200px;
    font-family: 'Galano Grotesque';
    font-size: 36px;
    box-shadow: 0px 2px 8px 8px rgba(26, 24, 30, 0.06);
    border-radius: 8px;
`;

export const FormDiv = muiStyled(Box)`
    position: relative;
    margin: auto 192px;
    top: 64px;
    line-height: 1.6;
    h5 {
        margin: 16px auto 30px auto;
        font-weight: 400;
        font-size: 23px;
        color: #4D4D4D;
    }
    label {
        font-size: 16px
    }
`;

export const ResultHeader = muiStyled(Box)(() => ({
    display: 'flex',   
    position: "relative",
    top: 150,
    margin: "auto 192px",
    justifyContent: "space-between",
}));

export const ResultDiv = muiStyled(Box)(() => ({
    
}));

export const FooterContainer = muiStyled(Grid)(({ theme: { palette: { primary } }}) => ({
    backgroundColor: primary.dark,
    height: "100%"
}));