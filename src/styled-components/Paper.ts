import { Paper, styled as muiStyled } from "@mui/material";

export const ResultItem = muiStyled(Paper)(({ theme: { palette, typography, spacing } }) => ({
    backgroundColor: palette.primary.light,
    ...typography.body2,
    padding: spacing(1),
    fontFamily: typography.fontFamily,
    textAlign: 'center',
    width: "100%",
    height: 50,
    color: palette.primary.dark,
}));