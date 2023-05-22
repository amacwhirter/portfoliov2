import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme";
import Grid from "@mui/material/Grid";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        justifyContent={"center"}
        style={{ backgroundColor: "#0F182A" }}
        spacing={6}
      >
        <Grid item xs={12}>
          <Navbar />
        </Grid>
        <Grid item xs={6} id={"home"}>
          <Home />
        </Grid>
        <Grid item xs={8} id={"about"}>
          <About />
        </Grid>
        <Grid item xs={8} id={"experience"}>
          <Experience />
        </Grid>
        <Grid item xs={8} id={"contact"}>
          <Contact />
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
