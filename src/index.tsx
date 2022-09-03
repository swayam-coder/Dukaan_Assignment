import * as ReactDOMClient from "react-dom/client";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: 'Galano Grotesque',
        h4: {
            fontWeight: "600px",
        },
    },
    palette: {
        primary: {
            light: "#DFDFDF",
            main: "#146EB4",
            dark: "#1A181E",
        },
        secondary: {
            main: "#146EB4",
            dark: "#4D4D4D",
            light: "#F5F3F3"
        }
    },
    components: {
        MuiPagination: {
            styleOverrides: {
                ul: {
                    justifyContent: 'center',
                    position: "relative"
                },
            }, 
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    textDecoration: 'none',
                    fontFamily: 'Galano Grotesque',
                }
            }
        },
        MuiBadge: {
            variants: [
                {
                    props: { color: 'primary' },
                    style: {
                        backgroundColor: 'white',
                        color: "black"
                    }
                }
            ]
        }
    }
})

import App from "./App";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(<ThemeProvider theme={theme}><App /></ThemeProvider>);