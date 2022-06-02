import * as React from 'react';
import Box from '@mui/material/Box'
import Header from 'components/header/Header';
import Drawer from 'components/drawer/Drawer';
import { drawerWidth } from 'components/drawer/Drawer.config';


function Page({children}) {
  return (
    <>
      <Drawer />
      <Box id='main'
      sx={{
        width: { md: `calc(100% - 260px)` },
        ml: { md: drawerWidth },
      }}>
        <Header />
        {children}
      </Box>
    </>
  );
}

export default Page;