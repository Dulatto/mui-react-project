import React from "react";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Header from "./ui/Header";
import theme from './ui/Theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      Hello
    </ThemeProvider>
  );
}

export default App;
