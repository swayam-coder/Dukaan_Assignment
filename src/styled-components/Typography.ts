import { Typography } from "@mui/material";
import { styled as muiStyled } from "@mui/system";

export const FormDesc = muiStyled(Typography)(({ theme: { palette: { secondary } } }) => ({
    margin: "16px auto 30px auto",
    fontWeight: 400,
    fontSize: 23,
    color: secondary.dark,
}))

export const FormTitle = muiStyled(Typography)(() => ({
    margin: 0, 
    fontWeight: 600
}))

export const UsageCardDesc = muiStyled(FormTitle)(() => ({
    fontWeight: 400
}))

export const ProductTitle = muiStyled(Typography)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        marginTop: "1em"
    },
}))