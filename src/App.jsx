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
import CssBaseline from '@mui/material/CssBaseline';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import axios from 'axios';

import Theme from './Global.theme';

import Home from './pages/home/Home';
import Profile from "./pages/profile/Profile";
import Recipes from "./pages/recipes/Recipes";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import ConfirmEmail from "pages/confirm-email/ConfirmEmail";

import './App.style.scss';

function App() {
  axios.defaults.baseURL = "http://localhost:5000";

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
            <Route path="/confirm-email" element={<ConfirmEmail />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
