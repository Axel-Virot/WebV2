/* Name:        Drawer.jsx
** Last modif:  27/05/2022 - Axel Virot
** Description: The drawer is the website sidebar
**              It is permanent on Desktop and temporary with smaller device
** Export:      Drawer
*/

/* React import
*/
import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';

/* MUI import
*/
import Box from '@mui/material/Box';
import { Drawer as MuiDrawer } from '@mui/material/';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Typography from '@mui/material/Typography';

/* Perfect scrollbar import
*/
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';

/* Project import
*/
import { drawerWidth, routesConfig } from './Drawer.config';
import { ReactComponent as Logo } from "./logo.svg";
import './Drawer.styles.scss';

function Drawer(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <>
      <Box className='logo-box'>
        <Link to='/'>
          <Logo className='logo' />
          <Typography className='title' variant='h1'>List Rocket</Typography>
        </Link>
      </Box>
      <PerfectScrollbar>
        {/* Box with margin to don't have PerfectScrollbar
				 ** bein overwritte by the sticky Subheader */}
        <Box marginRight='15px'>
          <List className='sections' subheader={<li className='subheader' />}>
            {routesConfig.map((section) => (
              <li key={`section-${section.index}`}>
                <ul>
                  <ListSubheader>{section.displayName}</ListSubheader>
                  {section.routes.map((route) => (
                    <ListItem key={`item-${route.index}`} disablePadding>
                      <ListItemButton
                        className={location.pathname === route.href ? 'currentLocation' : ''}
                        component={Link} to={route.href}>
                        <ListItemIcon className='icon'>
                          {route.icon}
                        </ListItemIcon>
                        <ListItemText primary={route.displayName} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </ul>
              </li>
            ))}
          </List>
        </Box>
      </PerfectScrollbar>
    </>
  );

  return (
    <>
      <MuiDrawer id='drawer'
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { width: drawerWidth },
        }}
      >
        {drawer}
      </MuiDrawer>
      <MuiDrawer id='drawer'
        variant="permanent"
        sx={{
          display: { xs: 'none', md: 'block' },
          '& .MuiDrawer-paper': { width: drawerWidth },
        }}
        open
      >
        {drawer}
      </MuiDrawer>
    </>
  );
}

export default Drawer;