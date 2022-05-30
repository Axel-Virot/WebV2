import {
  AppBar,
  Toolbar,
  Typography
} from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';

function Header() {
  return (
    
    <AppBar position="relative">
      <Toolbar>
        <PhotoCamera />
        <Typography variant="h6">ListRocket</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;