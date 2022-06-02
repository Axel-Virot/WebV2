import {
  AppBar,
  Toolbar,
  Box,
  InputBase,
  IconButton
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { drawerWidth } from '../drawer/Drawer.config';
import './Header.styles.scss';

function Header(props) {
  return (

    <AppBar id='header'
      sx={{
        width: { md: `calc(100% - ${drawerWidth} - 30px)`, xs: 'calc(100% - 30px)' },
        ml: { md: drawerWidth },
      }}>
      <Toolbar>
        <Box className='search'>
          <IconButton
            onClick={props.handleDrawerToggle}
            sx={{ display: { md: 'none' } }}
          >
            <MenuIcon className='icon' />
          </IconButton>
          <SearchIcon className='icon' />
          <InputBase className='input' placeholder="Recherche..."></InputBase>
        </Box>
        <Box className='button-box'>
          <NotificationsIcon className='icon' />
          <AccountCircleIcon className='icon'
            sx={{
              mr: '0 !important',
              width: '40px !important',
              height: '40px !important'
            }} />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;