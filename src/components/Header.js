import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Button, Container, Box, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';

const MotionButton = motion(Button);
const MotionBox = motion(Box);

function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95 }
  };

  const logoVariants = {
    hover: { scale: 1.05, rotate: 5, transition: { duration: 0.2 } }
  };

  const navItems = [
    { name: 'Início', path: '/' },
    { name: 'Funções', path: '/functions' },
    { name: 'Serviços', path: '/services' },
    { name: 'Cadastro', path: '/signup' },
    { name: 'Contato', path: '/support' },
  ];

  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ backdropFilter: 'blur(10px)', backgroundColor: 'rgba(30, 30, 30, 0.8)' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <MotionBox
            component={RouterLink}
            to="/"
            sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
            whileHover="hover"
            variants={logoVariants}
          >
            <img
              src="/avia-logo-canto.png"
              alt="AVIA Logo"
              style={{ width: '100px', height: '40px', objectFit: 'contain' }}
            />
          </MotionBox>
          {isMobile ? (
            <MotionButton
              color="inherit"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <MenuIcon />
            </MotionButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 2 }}>
              {navItems.map((item, index) => (
                <MotionButton
                  key={index}
                  color="inherit"
                  component={RouterLink}
                  to={item.path}
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  sx={{
                    fontWeight: 500,
                    letterSpacing: '0.5px',
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      width: '0%',
                      height: '2px',
                      bottom: 0,
                      left: '50%',
                      backgroundColor: 'primary.main',
                      transition: 'all 0.3s ease-in-out',
                    },
                    '&:hover::after': {
                      width: '100%',
                      left: '0%',
                    },
                  }}
                >
                  {item.name}
                </MotionButton>
              ))}
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;