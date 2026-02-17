import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import SwitchUI from '@mui/material/Switch';
import { CustomThemeContext } from '../themes/CustomThemeProvider'

export default function AraTopBar() {
  const { currentTheme, setTheme } = useContext(CustomThemeContext)
  const isDark = Boolean(currentTheme === 'dark')

  const themeText = !isDark ? 'نهار' : 'ليل';

  const handleThemeChange = (event) => {
    const { checked } = event.target
    if (checked) {
      setTheme('dark')
    } else {
      setTheme('normal')
    }
  }

  return (
    <div style={{ flexGrow: 1 }}>
      <AppBar position="static" dir="rtl" style={{ background: "#2E3B55" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, ml: "20px", textDecoration: "none" }}>
            <Button color="inherit" href="/">الصفحة الرئيسية</Button>
            <Button color="inherit" href="/how-it-works">للفضوليين</Button>
          </Typography>
          <FormControlLabel
            control={<SwitchUI checked={isDark} onChange={handleThemeChange} />}
            label={themeText}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}
