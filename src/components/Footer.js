import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#1c1c1c', padding: '20px', marginTop: 'auto' }}>
      <Typography variant="body2" color="textSecondary" align="center">
        {'© '}
        {new Date().getFullYear()} {' '}
        <Link color="primary" href="https://www.shoppingdocidadao.com.br/" target="_blank" rel="noopener">
          Shopping do Cidadão
        </Link>
        . Todos os direitos reservados.
      </Typography>
      <Typography variant="body2" color="textSecondary" align="center" mt={1}>
        Desenvolvido por AVIA Chatbot - Soluções inteligentes para o seu negócio.
      </Typography>
    </Box>
  );
};

export default Footer;
