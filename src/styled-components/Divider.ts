import { styled as muiStyled } from "@mui/material";
import Divider from '@mui/material/Divider';

const FormDivider1 = muiStyled(Divider)(({ theme }) => ({
    position: "relative",
    margin: "auto 192px",
    border: "none",
    height: "2px",
    background: "#D9D9D9",

    [theme.breakpoints.down(theme.breakpoints.values.laptop)]: {
        margin: "auto 100px"
    }
}))

export const FormDivider = muiStyled(FormDivider1)<{ top: string }>`
    top: ${p => p.top };
`;

export const FooterDivider = muiStyled(FormDivider)<{ top: string }>(({ theme: { palette: { secondary }}}) => ({
    background: secondary.light,
    height: "0.9px",
    margin: "auto",
    width: "80%"
}))