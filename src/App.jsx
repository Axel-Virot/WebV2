/* Name:        App.jsx
** Last modif:  30/05/2022 - Axel Virot
** Description: App is the website base code and routing system
** Export:      App
*/

/* React import
*/
import * as React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

/* MUI import
*/
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline';
import ThemeProvider from '@mui/material/styles/ThemeProvider';

/* Project import
*/
import Drawer from './components/drawer/Drawer';
import Header from './components/header/Header';
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile';
import Recipes from './pages/recipes/Recipes';
import { drawerWidth } from './components/drawer/Drawer.config';
import Theme from './Global.theme'
import './App.styles.scss'

function App() {
  //Methode de chacalus, redux > ça
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <Drawer mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
          <Box id='main'
            sx={{
              width: { md: `calc(100% - ${drawerWidth})` },
              ml: { md: drawerWidth },
            }}>
            <Header handleDrawerToggle={handleDrawerToggle}/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/new-recipe" element={<Recipes />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Box>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
