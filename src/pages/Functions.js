import React from 'react';
import { Typography, Container, Grid, Card, CardContent, CardMedia, Box } from '@mui/material';

const functionData = [
  {
    title: 'Como a AVIA Pode Ajudar?',
    image: '/robo2.png',
    points: [
      'Treinamento Personalizado: A AVIA oferece tutoriais específicos para cada função, garantindo que os funcionários aprendam o necessário para suas posições.',
      'Acesso Rápido a Informações: Com a AVIA, os colaboradores podem encontrar respostas para suas perguntas sem perder tempo procurando em manuais ou documentos.'
    ]
  },
  {
    title: 'Por que a AVIA é Importante?',
    image: '/tempo.png',
    points: [
      'Redução do Tempo de Integração: A AVIA acelera o processo de integração, permitindo que os funcionários se tornem produtivos mais rapidamente.',
      'Melhoria da Retenção de Funcionários: Funcionários bem integrados são mais propensos a permanecer na empresa a longo prazo.'
    ]
  },
  {
    title: 'Como a AVIA Revoluciona o Mercado?',
    image: '/escada.png',
    points: [
      'Inteligência Artificial Avançada: A AVIA utiliza algoritmos de aprendizado de máquina para personalizar a experiência de aprendizado.',
      'Adaptação Contínua: A AVIA se ajusta às mudanças nas necessidades da empresa e dos funcionários.'
    ]
  }
];

function Functions() {
  return (
    <Container component="main" maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" component="h1" align="center" gutterBottom>
        Funções
      </Typography>
      <Typography variant="subtitle1" align="center" gutterBottom sx={{ mb: 6 }}>
        AVIA e suas aplicações para diversas empresas no mercado
      </Typography>

      <Grid container spacing={4}>
        {functionData.map((item, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="346"
                image={item.image}
                alt={item.title}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" component="h3" gutterBottom>
                  {item.title}
                </Typography>
                <Box component="ul" sx={{ pl: 2 }}>
                  {item.points.map((point, idx) => (
                    <Typography component="li" variant="body2" key={idx} paragraph>
                      {point}
                    </Typography>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Functions;