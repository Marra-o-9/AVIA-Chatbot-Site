import React from 'react';
import { Typography, Container, Grid, Card, CardContent, Button } from '@mui/material';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

const MotionContainer = motion(Container);
const MotionTypography = motion(Typography);
const MotionGrid = motion(Grid);
const MotionCard = motion(Card);
const MotionButton = motion(Button);

function Services() {
  const services = [
    { name: 'Comunidade', price: 'Grátis', features: ['Chatbot integrado', 'Treinamento básico'] },
    { name: 'Empresarial', price: 'R$100/mês', features: ['Chatbot integrado', 'Treinamento personalizado', 'Acesso à API', 'Consultoria básica'] },
    { name: 'Empresarial Pro', price: 'R$200/mês', features: ['Chatbot integrado', 'Treinamento avançado', 'Acesso à API', 'Consultoria avançada', 'Features experimentais'] },
  ];

  const handleRedirect = () => {
    window.open('https://shopcidadao.com.br', '_blank', 'noopener,noreferrer');
  };

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
    <MotionContainer component="main" maxWidth="lg">
      <AnimatedSection>
        <MotionTypography variant="h2" component="h1" gutterBottom variants={itemVariants}>
          Serviços
        </MotionTypography>
      </AnimatedSection>
      <AnimatedSection>
        <MotionGrid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={4} key={index}>
              <MotionCard
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
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
                  <MotionButton 
                    variant="contained" 
                    fullWidth 
                    onClick={handleRedirect}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Selecionar
                  </MotionButton>
                </CardContent>
              </MotionCard>
            </Grid>
          ))}
        </MotionGrid>
      </AnimatedSection>
    </MotionContainer>
  );
}

export default Services;