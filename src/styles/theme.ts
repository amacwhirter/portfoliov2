import { createTheme } from "@mui/material/styles";

//adds mui theme
const theme = createTheme({
    palette: {
        primary: {
            main: "#5BE3D0",
            contrastText: "#fff",
        },
        secondary: {
            main: "#ff4547",
            contrastText: "#fff",
        },
    },
    typography: {
        fontFamily: 'Inter, sans-serif',
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
                            @font-face {
                              font-family: 'Inter';
                              font-style: normal;
                              font-display: swap;
                              src: local('Inter'), local('Inter-Regular'), url(./assets/fonts/Inter/Inter-Regular.ttf) format('ttf');
                              unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
                            }
                          `,
        },
    },
});

export default theme;
