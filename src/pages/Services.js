// src/pages/Services.js
import React from 'react';
import { Typography, Container, Grid, Card, CardContent, Button } from '@mui/material';

function Services() {
  const services = [
    { name: 'Comunidade', price: 'Grátis', features: ['Chatbot integrado', 'Treinamento básico'] },
    { name: 'Empresarial', price: 'R$100/mês', features: ['Chatbot integrado', 'Treinamento personalizado', 'Acesso à API', 'Consultoria básica'] },
    { name: 'Empresarial Pro', price: 'R$200/mês', features: ['Chatbot integrado', 'Treinamento avançado', 'Acesso à API', 'Consultoria avançada', 'Features experimentais'] },
  ];

  return (
    <Container component="main" maxWidth="lg">
      <Typography variant="h2" component="h1" gutterBottom>
        Serviços
      </Typography>
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {service.name}
                </Typography>
                <Typography variant="h4" gutterBottom>
                  {service.price}
                </Typography>
                <ul>
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <Button variant="contained" fullWidth>
                  Selecionar
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Services;