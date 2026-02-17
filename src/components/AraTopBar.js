import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { CustomThemeContext } from '../themes/CustomThemeProvider'

export default function AraTopBar() {
  const { currentTheme, setTheme } = useContext(CustomThemeContext)
  const isDark = Boolean(currentTheme === 'dark')

  const handleThemeChange = () => {
    if (!isDark) {
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
          <IconButton color="inherit" onClick={handleThemeChange} aria-label="toggle theme">
            {isDark ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
