import React, { useState, useRef, useEffect } from 'react';
import { Typography, Container, TextField, Button, Grid, Snackbar } from '@mui/material';
import axios from 'axios';
import { motion, useAnimation, useInView } from 'framer-motion';

const MotionContainer = motion(Container);
const MotionTypography = motion(Typography);
const MotionTextField = motion(TextField);
const MotionButton = motion(Button);

function Signup() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/signup', formData);
      setSnackbarMessage('Cadastro realizado com sucesso!');
      setOpenSnackbar(true);
      setFormData({ firstName: '', lastName: '', email: '', password: '' });
    } catch (error) {
      setSnackbarMessage('Erro ao realizar cadastro. Tente novamente.');
      setOpenSnackbar(true);
    }
  };

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
    <MotionContainer component="main" maxWidth="xs">
      <AnimatedSection>
        <MotionTypography variant="h2" component="h1" gutterBottom variants={itemVariants}>
          Cadastro
        </MotionTypography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <MotionTextField
                fullWidth
                label="Primeiro Nome"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                variants={itemVariants}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <MotionTextField
                fullWidth
                label="Sobrenome"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                variants={itemVariants}
              />
            </Grid>
            <Grid item xs={12}>
              <MotionTextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                variants={itemVariants}
              />
            </Grid>
            <Grid item xs={12}>
              <MotionTextField
                fullWidth
                label="Senha"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
                variants={itemVariants}
              />
            </Grid>
            <Grid item xs={12}>
              <MotionButton 
                type="submit" 
                variant="contained" 
                fullWidth
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Cadastrar
              </MotionButton>
            </Grid>
          </Grid>
        </form>
      </AnimatedSection>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        message={snackbarMessage}
      />
    </MotionContainer>
  );
}

export default Signup;