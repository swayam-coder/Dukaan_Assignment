import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { styled as muiStyled } from "@mui/system";

export const UsageContainer = muiStyled(Grid)(() => ({
    display: "flex",
    justifyContent: "space-around",
    padding: "100px"
}))
export const UsageCardContainer = muiStyled(Grid)(() => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "300px",
    textAlign: "center"
}))