import * as React from 'react';

import { Box } from '@mui/system';
import { Card, CardContent } from '@mui/material';

import "./AuthContainer.style.scss";

function AuthContainer({children}) {
  return (
    <Box id="auth-container">
      <Card sx={{minWidth: "350px"}}>
        <CardContent>
          {children}
        </CardContent>
      </Card>
    </Box>
  );
}

export default AuthContainer;