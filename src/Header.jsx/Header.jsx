import * as React from 'react';
import Button from '@mui/material/Button';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import InfoIcon from '@mui/icons-material/Info';
import Stack from '@mui/material/Stack';

function Header() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" startIcon={<><LightModeIcon /><DarkModeIcon/></>}/>
      
      <Button variant="contained" endIcon={<InfoIcon />}>
        About
      </Button>
      <h1>GitHub Users</h1>
    </Stack>
  
  );
}
export default Header