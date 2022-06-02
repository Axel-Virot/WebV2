import React, { useState } from 'react';
import Box from '@mui/material/Box'
import Header from 'components/header/Header';
import Drawer from 'components/drawer/Drawer';
import { drawerWidth } from 'components/drawer/Drawer.config';


function Page({children}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <>
      <Drawer mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
      <Box id='main'
        sx={{
          width: { md: `calc(100% - ${drawerWidth})` },
          ml: { md: drawerWidth },
        }}>
        <Header handleDrawerToggle={handleDrawerToggle}/>
        {children}
      </Box>
    </>
  );
}

export default Page;