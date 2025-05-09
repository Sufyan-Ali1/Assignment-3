import { AppBar, Toolbar, Typography, Button, Switch } from '@mui/material';
import Link from 'next/link';
import { useTheme } from '../context/ThemeContext';

export default function Header() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Movie House
        </Typography>
        <Button color="inherit" component={Link} href="/">
          Home
        </Button>
        <Button color="inherit" component={Link} href="/directors">
          Directors
        </Button>
        <Switch checked={darkMode} onChange={toggleDarkMode} color="default" />
      </Toolbar>
    </AppBar>
  );
}