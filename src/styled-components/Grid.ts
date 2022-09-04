import { Grid, styled as muiStyled } from "@mui/material";

export const ResultGrid = muiStyled(Grid)(({ theme }) => ({ 
    postion: "relative", 
    margin: "auto", 
    padding: "192px",

    [theme.breakpoints.down(theme.breakpoints.values.laptop)]: {
        padding: "192px 100px"
    }
}))