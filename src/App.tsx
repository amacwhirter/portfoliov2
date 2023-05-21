import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme";
import Grid from "@mui/material/Grid";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container className="App" style={{ backgroundColor: "#0F182A" }}>
        <Grid item>
          <Navbar />
        </Grid>
        <Grid item style={{ marginTop: 64 }}>
          <Home />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
