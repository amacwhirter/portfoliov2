import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App" style={{backgroundColor: '#3e3e42'}}>
                <Navbar/>
            </div>
        </ThemeProvider>
    );
}

export default App;
