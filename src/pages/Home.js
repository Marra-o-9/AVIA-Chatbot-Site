import React from 'react';
import { Container, Typography, Button } from '@mui/material';

const Home = () => {
  return (
    <Container>
      <Typography variant="h2" color="primary" gutterBottom>
        Bem-vindo à AVIA
      </Typography>
      <Typography variant="h6" color="textSecondary">
        A AVIA é um chatbot especializado que ajuda a otimizar processos e economizar tempo.
        Com inteligência artificial e aprendizado contínuo, ela se adapta às necessidades
        de qualquer empresa.
      </Typography>
      <Button variant="contained" color="primary" href="/services">
        Conheça nossos serviços
      </Button>
    </Container>
  );
};

export default Home;
