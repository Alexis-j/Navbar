import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import './index.css'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#005b8f",
    },
    secondary: {
      main: "#171a21",
    },
  },
});

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
          <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
