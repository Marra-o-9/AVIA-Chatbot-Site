import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Button, Container, Box } from '@mui/material';

function Header() {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box component={RouterLink} to="/" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img
              src="/avia-logo-canto.png"
              alt="AVIA Logo"
              style={{ width: '100px', height: '40px', objectFit: 'contain' }}
            />
          </Box>
          <Button color="inherit" component={RouterLink} to="/">Início</Button>
          <Button color="inherit" component={RouterLink} to="/functions">Funções</Button>
          <Button color="inherit" component={RouterLink} to="/services">Serviços</Button>
          <Button color="inherit" component={RouterLink} to="/signup">Cadastro</Button>
          <Button color="inherit" component={RouterLink} to="/support">Contato</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;