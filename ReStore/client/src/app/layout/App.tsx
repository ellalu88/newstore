import { ThemeProvider } from "@emotion/react";
import { Container, createTheme, CssBaseline } from "@mui/material";
import { useState } from "react";
import Catalog from "../../features/catalog/catalog";
import Header from "./Header";


function App() {
  const[darkMode,setDarkMode]=useState(false);
  const paletterType=darkMode ? 'dark' : 'light';
  const theme=createTheme({
    palette:{
      mode: paletterType,
      background:{
        default:paletterType==='light' ? '#eaeaea' :'#121212'
      }
    }
  })
  function handleThemeChange(){
    setDarkMode(!darkMode);
  }
  
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline/>
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/>
      <Container>
      <Catalog />
      </Container>
    </ThemeProvider>
  );
}

export default App;
