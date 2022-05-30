import CssBaseline from '@mui/material/CssBaseline';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import Box from '@mui/material/Box'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Theme from './Global.theme'
import Header from './components/header/Header';
import Drawer from './components/drawer/Drawer';

import Home from './pages/home/Home'
import Profile from "./pages/profile/Profile";
import Recipes from "./pages/recipes/Recipes";

import { drawerWidth } from './components/drawer/Drawer.config';

import './App.scss'

function App() {
  console.log(drawerWidth)
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <Drawer />
          <Box id='main'
            sx={{
              width: { md: `calc(100% - 260px)` },
              ml: { md: drawerWidth },
            }}>
            <Header />
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
