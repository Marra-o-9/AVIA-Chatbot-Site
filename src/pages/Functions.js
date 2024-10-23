import React from 'react';
import { Typography, Container, Grid, Card, CardContent, CardMedia, Box } from '@mui/material';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

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

const MotionContainer = motion(Container);
const MotionTypography = motion(Typography);
const MotionGrid = motion(Grid);
const MotionCard = motion(Card);

function Functions() {
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
    <MotionContainer component="main" maxWidth="lg" sx={{ py: 8 }}>
      <AnimatedSection>
        <MotionTypography variant="h2" component="h1" align="center" gutterBottom variants={itemVariants}>
          Funções
        </MotionTypography>
        <MotionTypography variant="subtitle1" align="center" gutterBottom sx={{ mb: 6 }} variants={itemVariants}>
          AVIA e suas aplicações para diversas empresas no mercado
        </MotionTypography>
      </AnimatedSection>

      <AnimatedSection>
        <MotionGrid container spacing={4}>
          {functionData.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <MotionCard
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
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
              </MotionCard>
            </Grid>
          ))}
        </MotionGrid>
      </AnimatedSection>
    </MotionContainer>
  );
}

export default Functions;