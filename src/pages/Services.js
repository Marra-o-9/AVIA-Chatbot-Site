import React from 'react';
import { Grid, Container, Typography } from '@mui/material';
import ServiceCard from '../components/ServiceCard';

const services = [
  { title: 'Consultoria de Processos', description: 'Otimize seus processos internos com AVIA.' },
  { title: 'Análise de Planilhas', description: 'A AVIA lê e analisa planilhas para gerar insights.' },
  // Adicione mais serviços conforme necessário
];

const Services = () => {
  return (
    <Container>
      <Typography variant="h3" color="primary" gutterBottom>
        Nossos Serviços
      </Typography>
      <Grid container spacing={3}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ServiceCard service={service} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;
