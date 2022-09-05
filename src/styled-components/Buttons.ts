import styled from "@emotion/styled";
import { Badge, Button } from "@mui/material";
import { styled as muiStyled } from "@mui/system";

export const GenerateSloganBtn = muiStyled(Button)(({ theme: { palette: { primary } } }) => ({
    textTransform: "none", 
    backgroundColor: primary.main,
    marginTop: '5%'
}))

export const SignInBtn = muiStyled(Button)(() => ({
    color: 'white', 
    border: 'none',  
    marginRight: "20px"
}))

export const DownloadBtn = muiStyled(Button)(({ theme: { palette: { primary } } }) => ({
    backgroundColor: 'white', 
    color: primary.main
}))

export const FooterBadge = muiStyled(Badge)(({ theme: { palette: { primary } } }) => ({
    '& .MuiBadge-': {
        '&badge': {
            backgroundColor: 'white', 
            color: primary.dark,
            margin: "-1px -15px"
        }
    },
}))

export const DownloadAllResutsBtn = muiStyled(Button)(({ theme }) => ({
    [theme.breakpoints.between(theme.breakpoints.values.xs, theme.breakpoints.values.md)]: {
        paddingTop: "15px"
    },
}))