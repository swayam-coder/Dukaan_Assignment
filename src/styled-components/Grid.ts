import { Grid, styled as muiStyled } from "@mui/material";

export const ResultGrid = muiStyled(Grid)(({ theme }) => ({ 
    postion: "relative", 
    margin: "auto", 
    padding: "192px",

    [theme.breakpoints.down(theme.breakpoints.values.lg)]: {
        padding: "192px 100px"
    },

    [theme.breakpoints.down(theme.breakpoints.values.md)]: {
        padding: "192px 50px"
    }
}))

export const ProductGrid = muiStyled(Grid)(({ theme }) => ({ 
    [theme.breakpoints.down(theme.breakpoints.values.md)]: {
        display: "flex",
        justifyContent: "center"
    }
}))

export const FooterLinksGrid = muiStyled(Grid)(({ theme }) => ({ 
    [theme.breakpoints.down(theme.breakpoints.values.xl)]: {
        paddingLeft: 0,
        paddingRight:0
    }
}))

export const FooterLogoGrid = muiStyled(Grid)(({ theme }) => ({ 
    [theme.breakpoints.down(theme.breakpoints.values.xl)]: {
        textAlign: 'center'
    }
}))