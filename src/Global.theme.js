/* Name:        Global.theme.jsx
** Last modif:  24/05/2022 - Axel Virot
** Description: Global website MUI theme
** Export:      Theme
*/

import { createTheme } from "@mui/material";

const Theme = createTheme({
  /* Theme palette:
  ** Primary -> Green
  ** Secondary -> Purple
  ** Text primary -> grey
  */
  palette: {
    type: 'light',
    primary: {
      main: '#1E9E34',
    },
    secondary: {
      main: '#9E1E89',
    },
    text: {
      primary: '#566a7f'
    }
  },

  /* Theme typography:
  ** fontFamily -> Public sans
  ** fontSize -> 13px (default - 1px)
  */
  typography: {
    fontFamily: 'Public Sans',
    fontSize: 13,
  },
});

export default Theme;