import { createTheme } from "@mui/material/styles";

//adds mui theme
const theme = createTheme({
    palette: {
        primary: {
            main: "#4168AE",
            contrastText: "#fff",
        },
        secondary: {
            main: "#ff4547",
            contrastText: "#fff",
        },
    },
});

export default theme;
