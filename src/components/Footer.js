import React from 'react';
import { Box, Typography, Link, Container, Grid, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionIconButton = motion(IconButton);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const socialIcons = [
    { Icon: Facebook, link: 'https://facebook.com' },
    { Icon: Twitter, link: 'https://twitter.com' },
    { Icon: LinkedIn, link: 'https://linkedin.com' },
    { Icon: Instagram, link: 'https://instagram.com' },
  ];

  return (
    <MotionBox
      component="footer"
      sx={{
        backgroundColor: 'background.paper',
        color: 'text.primary',
        py: 6,
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} sm={6} md={3}>
            <MotionTypography variant="h6" gutterBottom variants={itemVariants}>
              Sobre Nós
            </MotionTypography>
            <MotionTypography variant="body2" variants={itemVariants}>
              AVIA é uma plataforma inovadora de assistência virtual para integração de funcionários.
            </MotionTypography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <MotionTypography variant="h6" gutterBottom variants={itemVariants}>
              Links Rápidos
            </MotionTypography>
            {['Início', 'Funções', 'Serviços', 'Cadastro', 'Contato'].map((item, index) => (
              <MotionTypography key={index} variant="body2" component="div" variants={itemVariants}>
                <Link href={`/${item.toLowerCase()}`} color="inherit" underline="hover">
                  {item}
                </Link>
              </MotionTypography>
            ))}
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <MotionTypography variant="h6" gutterBottom variants={itemVariants}>
              Contato
            </MotionTypography>
            <MotionTypography variant="body2" variants={itemVariants}>
              Email: contato@avia.com
            </MotionTypography>
            <MotionTypography variant="body2" variants={itemVariants}>
              Telefone: (11) 91030-3718
            </MotionTypography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <MotionTypography variant="h6" gutterBottom variants={itemVariants}>
              Siga-nos
            </MotionTypography>
            <Box>
              {socialIcons.map(({ Icon, link }, index) => (
                <MotionIconButton
                  key={index}
                  color="primary"
                  component="a"
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon />
                </MotionIconButton>
              ))}
            </Box>
          </Grid>
        </Grid>
        <MotionBox sx={{ mt: 4, textAlign: 'center' }} variants={itemVariants}>
          <Typography variant="body2" color="text.secondary">
            {'© '}
            {currentYear}{' '}
            <Link color="inherit" href="https://shopcidadao.com.br" target="_blank" rel="noopener">
              Shopping do Cidadão
            </Link>
            . Todos os direitos reservados.
          </Typography>
          <Typography variant="body2" color="text.secondary" mt={1}>
            Desenvolvido por VIA Dupla - Soluções inteligentes para o seu negócio.
          </Typography>
        </MotionBox>
      </Container>
    </MotionBox>
  );
};

export default Footer;