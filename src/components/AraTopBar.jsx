import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
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
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1 }}>
              <Button color="inherit" href="/">الصفحة الرئيسية</Button>
              <Button color="inherit" href="/how-it-works">للفضوليين</Button>
            </Box>
            <IconButton color="inherit" onClick={handleThemeChange} aria-label="toggle theme">
              {isDark ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
