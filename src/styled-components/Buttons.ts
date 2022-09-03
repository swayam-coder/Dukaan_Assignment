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

// const Component = styled.div`
//     background-color: 'white';
//     color: primary.main;
// `;

export const DownloadBtn = muiStyled(Button)(({ theme: { palette: { primary } } }) => ({
    backgroundColor: 'white', 
    color: primary.main
}))

export const FooterBadge = muiStyled(Badge)(({ theme: { palette: { primary } } }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: 'white', 
        color: primary.dark
    },
    '& .MuiBadge-root': {
        margin: "5px 15px"
    }
}))