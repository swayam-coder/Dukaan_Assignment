import { styled as muiStyled } from "@mui/material";
import Divider from '@mui/material/Divider';

export const FormDivider = muiStyled(Divider)<{ top: string }>`
    position: relative;
    top: ${p => p.top };
    margin: auto 192px;
    border: none;
    height: 2px;
    background: #D9D9D9;
`;

export const FooterDivider = muiStyled(FormDivider)<{ top: string }>(({ theme: { palette: { secondary }}}) => ({
    background: secondary.light,
    height: "0.9px",
    margin: "auto",
    width: "80%"
}))