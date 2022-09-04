import * as ReactDOMClient from "react-dom/client";
import { ThemeProvider, createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface BreakpointOverrides { 
        xs: true;
        sm: true;
        md: true;
        lg: true;
        xl: true;
        mobileS: true;
        mobileM: true;
        mobileL: true;
        tablet: true;
        laptop: true;
        laptopL: true;
        desktop: true;
    }
}

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
    breakpoints: {
        values: {
            xs: 0,
            sm: 0,
            md: 0,
            lg: 0,
            xl: 0,
            mobileS: 320,
            mobileM: 375,
            mobileL: 425,
            tablet: 768,
            laptop:  1024,
            laptopL:  1440,
            desktop: 2560
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