import React from 'react';
import { Container, Typography, Button } from '@mui/material';

const Schedule = () => {
  // Adicione aqui a lógica para calendário e disponibilidade

  return (
    <Container>
      <Typography variant="h3" color="primary" gutterBottom>
        Agende uma Consulta
      </Typography>
      {/* Código do calendário aqui */}
      <Button variant="contained" color="primary">
        Agendar
      </Button>
    </Container>
  );
};

export default Schedule;
