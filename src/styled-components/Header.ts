import { Box, styled as muiStyled } from "@mui/material";

export const HeaderContainer = muiStyled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    transform: "translateY(100%)",
    maxWidth: "1072px",
    margin: "auto",

    [theme.breakpoints.between('md', 'lg')]: {
        maxWidth: '600px' 
    },

    [theme.breakpoints.down('md')]: {
        display: 'block',
        textAlign: "center",
        top: "-25%",
        position: "relative"
    }
}))

export const HeaderWrapper = muiStyled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "328px",

    [theme.breakpoints.down('sm')]: {
        height: "230px"
    },
}))

