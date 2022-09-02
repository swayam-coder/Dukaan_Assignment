import { Button } from "@mui/material";
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
