'use client';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import HomeIcon                                         from '@mui/icons-material/Home';
import AccountCircleIcon                                from '@mui/icons-material/AccountCircle';

export default function HeaderPost() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, fontSize: 40 }}
          >
            <HomeIcon />
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Prueba colmena
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, fontSize: 40 }}
          >
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
