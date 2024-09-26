import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static" color="transparent">
      <Toolbar>
        <Typography variant="h6" color="primary" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: '#00bcd4' }}>
            <img src="/logo.png" alt="AVIA Logo" style={{ width: '40px', marginRight: '10px' }} />
            AVIA Chatbot
          </Link>
        </Typography>
        <Box>
          <Button color="inherit">
            <Link to="/services" style={{ textDecoration: 'none', color: '#ffffff' }}>
              Serviços
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/schedule" style={{ textDecoration: 'none', color: '#ffffff' }}>
              Agendamento
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/signup" style={{ textDecoration: 'none', color: '#ffffff' }}>
              Cadastro
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/support" style={{ textDecoration: 'none', color: '#ffffff' }}>
              Suporte
            </Link>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
