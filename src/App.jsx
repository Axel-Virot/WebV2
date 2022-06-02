import CssBaseline from '@mui/material/CssBaseline';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Theme from './Global.theme'

import Home from './pages/home/Home'
import Profile from "./pages/profile/Profile";
import Recipes from "./pages/recipes/Recipes";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

import './App.scss'

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new-recipe" element={<Recipes />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
