import React from 'react';
import { Typography, Container, Grid, Card, CardContent, Button, Box, useTheme, useMediaQuery } from '@mui/material';
import { Language, Event, ShoppingCart, ContactSupport, ArrowForward } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

function Home() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const navigateTo = (path) => {
    navigate(path);
  };

  const MotionTypography = motion(Typography);
  const MotionCard = motion(Card);
  const MotionBox = motion(Box);
  const MotionButton = motion(Button);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const AnimatedSection = ({ children }) => {
    const controls = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.3 });

    useEffect(() => {
      if (inView) {
        controls.start('visible');
      }
    }, [controls, inView]);

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <Container component={motion.main} maxWidth="lg">
      <AnimatedSection>
        <Box sx={{ my: 8, textAlign: 'center' }}>
          <MotionTypography
            variant="h1"
            component="h1"
            gutterBottom
            variants={itemVariants}
          >
            AVIA: Uma nova via
          </MotionTypography>
          <MotionTypography
            variant="subtitle1"
            gutterBottom
            variants={itemVariants}
          >
            Assistente Virtual de Inteligência Artificial
          </MotionTypography>
        </Box>
      </AnimatedSection>

      <AnimatedSection>
        <Grid container spacing={4} alignItems="center" sx={{ my: 4 }}>
          <Grid item xs={12} md={6}>
            <MotionTypography variant="h2" gutterBottom variants={itemVariants}>
              Bem-vindo à AVIA
            </MotionTypography>
            <MotionTypography variant="body1" variants={itemVariants}>
              A AVIA é um assistente virtual de inteligência artificial projetado para facilitar a integração
              de novos funcionários às empresas.
            </MotionTypography>
          </Grid>
          <Grid item xs={12} md={6}>
            <MotionBox
              sx={{ position: 'relative', height: '300px', overflow: 'hidden', borderRadius: 2 }}
              variants={itemVariants}
            >
              <img src="/robo.png" alt="AVIA Robot" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </MotionBox>
          </Grid>
        </Grid>
      </AnimatedSection>

      <AnimatedSection>
        <MotionBox sx={{ my: 8, textAlign: 'center' }} variants={itemVariants}>
          <MotionTypography variant="h2" gutterBottom variants={itemVariants}>
            Qual é a missão da AVIA?
          </MotionTypography>
          <MotionTypography variant="body1" sx={{ maxWidth: '800px', margin: '0 auto' }} variants={itemVariants}>
            Facilitar a transição dos funcionários para suas funções, fornecendo suporte e conhecimento essencial.
          </MotionTypography>
        </MotionBox>
      </AnimatedSection>

      <AnimatedSection>
        <Grid container spacing={4} sx={{ my: 4 }} alignItems="center">
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <MotionTypography variant="h3" gutterBottom variants={itemVariants}>
              Como a AVIA ajuda?
            </MotionTypography>
            <MotionTypography variant="body1" variants={itemVariants}>
              A AVIA oferece suporte personalizado, tutoriais interativos e respostas rápidas às dúvidas dos funcionários,
              tornando o processo de integração mais eficiente e agradável.
            </MotionTypography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
              <MotionButton
                variant="contained"
                color="primary"
                endIcon={<ArrowForward />}
                onClick={() => navigateTo('/functions')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={itemVariants}
              >
                Saiba mais
              </MotionButton>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
            <MotionBox
              sx={{ position: 'relative', height: '300px', overflow: 'hidden', borderRadius: 2 }}
              variants={itemVariants}
            >
              <img src="/homem-feliz.png" alt="Happy office worker" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </MotionBox>
          </Grid>
        </Grid>
      </AnimatedSection>

      <AnimatedSection>
        <MotionTypography variant="h2" align="center" gutterBottom sx={{ my: 8 }} variants={itemVariants}>
          Nossos Serviços
        </MotionTypography>

        <Grid container spacing={4} sx={{ my: 4 }}>
          {[
            { title: 'Funções', icon: <Language fontSize="large" />, description: 'Descubra como a AVIA ajuda os funcionários a se adaptarem rapidamente às suas tarefas e responsabilidades.', path: '/functions' },
            { title: 'Cadastro', icon: <Event fontSize="large" />, description: 'Saiba como a AVIA planeja coletar métricas e dados para melhorar continuamente o processo de integração.', path: '/signup' },
            { title: 'Serviços', icon: <ShoppingCart fontSize="large" />, description: 'Explore nossos serviços personalizados, desde consultoria até soluções autônomas.', path: '/services' },
            { title: 'Contato', icon: <ContactSupport fontSize="large" />, description: 'Entre em contato conosco para obter mais informações ou esclarecer dúvidas.', path: '/support' },
          ].map((item, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <MotionCard
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: '0.3s',
                  '&:hover': {
                    boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
                  },
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    {item.icon}
                    <Typography variant="h5" component="h3" sx={{ ml: 1 }}>
                      {item.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ mb: 2, flexGrow: 1 }}>
                    {item.description}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <MotionButton
                      variant="contained"
                      color="primary"
                      onClick={() => navigateTo(item.path)}
                      endIcon={<ArrowForward />}
                      sx={{ width: 'auto', px: 4 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Ver detalhes
                    </MotionButton>
                  </Box>
                </CardContent>
              </MotionCard>
            </Grid>
          ))}
        </Grid>
      </AnimatedSection>
    </Container>
  );
}

export default Home;