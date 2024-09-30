import React from 'react';
import { Typography, Container, Grid, Card, CardContent, Button, Box } from '@mui/material';
import { Language, Event, ShoppingCart, ContactSupport } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <Container component="main" maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h1" component="h1" align="center" gutterBottom>
          AVIA: Uma nova via
        </Typography>
        <Typography variant="subtitle1" align="center" gutterBottom>
          Assistente Virtual de Inteligência Artificial
        </Typography>
      </Box>

      <Grid container spacing={4} sx={{ my: 4 }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h2" gutterBottom>
            Bem-vindo à AVIA
          </Typography>
          <Typography variant="body1">
            A AVIA é um assistente virtual de inteligência artificial projetado para facilitar a integração
            de novos funcionários às empresas.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <img src="/robo.png" alt="AVIA Robot" style={{ maxWidth: '100%', height: 'auto' }} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box sx={{ my: 4 }}>
        <Typography variant="h2" gutterBottom>
          Qual é a missão da AVIA?
        </Typography>
        <Typography variant="body1">
          Facilitar a transição dos funcionários para suas funções, fornecendo suporte e conhecimento essencial.
        </Typography>
      </Box>

      <Grid container spacing={4} sx={{ my: 4 }}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <img src="/homem-feliz.png" alt="Happy office worker" style={{ maxWidth: '100%', height: 'auto' }} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" gutterBottom>
            Como a AVIA ajuda?
          </Typography>
          <Typography variant="body1">
            A AVIA oferece suporte personalizado, tutoriais interativos e respostas rápidas às dúvidas dos funcionários,
            tornando o processo de integração mais eficiente e agradável.
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={4} sx={{ my: 4 }}>
        {[
          { title: 'Funções', icon: <Language />, description: 'Descubra como a AVIA ajuda os funcionários a se adaptarem rapidamente às suas tarefas e responsabilidades.', path: '/functions' },
          { title: 'Cadastro', icon: <Event />, description: 'Saiba como a AVIA planeja coletar métricas e dados para melhorar continuamente o processo de integração.', path: '/signup' },
          { title: 'Serviços', icon: <ShoppingCart />, description: 'Explore nossos serviços personalizados, desde consultoria até soluções autônomas.', path: '/services' },
          { title: 'Contato', icon: <ContactSupport />, description: 'Entre em contato conosco para obter mais informações ou esclarecer dúvidas.', path: '/support' },
        ].map((item, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  {item.icon}
                  <Typography variant="h5" component="h3" sx={{ ml: 1 }}>
                    {item.title}
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  {item.description}
                </Typography>
                <Button variant="contained" color="primary" onClick={() => navigateTo(item.path)}>
                  Ver detalhes
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Home;