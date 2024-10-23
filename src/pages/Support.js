import React, { useState, useRef, useEffect } from 'react';
import { Typography, Container, TextField, Button, Grid, Accordion, AccordionSummary, AccordionDetails, Snackbar } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from 'axios';
import { motion, useAnimation, useInView } from 'framer-motion';

const MotionContainer = motion(Container);
const MotionTypography = motion(Typography);
const MotionTextField = motion(TextField);
const MotionButton = motion(Button);
const MotionAccordion = motion(Accordion);

function Support() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
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
      await axios.post('http://localhost:5000/api/support', formData);
      setSnackbarMessage('Mensagem enviada com sucesso!');
      setOpenSnackbar(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSnackbarMessage('Erro ao enviar mensagem. Tente novamente.');
      setOpenSnackbar(true);
    }
  };

  const faqs = [
    { question: 'Como funciona o treinamento personalizado da AVIA?', answer: 'O treinamento personalizado da AVIA é adaptado às necessidades específicas de cada empresa e funcionário...' },
    { question: 'Qual é a diferença entre a consultoria básica e a avançada?', answer: 'A consultoria básica oferece suporte inicial, enquanto a avançada fornece análises detalhadas e estratégias personalizadas...' },
    { question: 'Quais são os métodos de pagamento aceitos?', answer: 'Aceitamos cartões de crédito, transferências bancárias e boletos...' },
  ];

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
    <MotionContainer component="main" maxWidth="lg">
      <AnimatedSection>
        <MotionTypography variant="h2" component="h1" gutterBottom variants={itemVariants}>
          Suporte
        </MotionTypography>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <MotionTypography variant="h4" gutterBottom variants={itemVariants}>
              Entre em Contato
            </MotionTypography>
            <form onSubmit={handleSubmit}>
              <MotionTextField
                fullWidth
                label="Nome"
                name="name"
                value={formData.name}
                onChange={handleChange}
                margin="normal"
                required
                variants={itemVariants}
              />
              <MotionTextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                margin="normal"
                required
                variants={itemVariants}
              />
              <MotionTextField
                fullWidth
                label="Mensagem"
                name="message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                margin="normal"
                required
                variants={itemVariants}
              />
              <MotionButton 
                type="submit" 
                variant="contained" 
                sx={{ mt: 2 }}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Enviar
              </MotionButton>
            </form>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <MotionTypography variant="h4" gutterBottom variants={itemVariants}>
              Perguntas Frequentes
            </MotionTypography>
            {faqs.map((faq, index) => (
              <MotionAccordion key={index} variants={itemVariants}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>{faq.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{faq.answer}</Typography>
                </AccordionDetails>
              </MotionAccordion>
            ))}
          </Grid>
        </Grid>
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

export default Support;