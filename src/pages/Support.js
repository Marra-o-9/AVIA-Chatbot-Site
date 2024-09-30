import React, { useState } from 'react';
import { Typography, Container, TextField, Button, Grid, Accordion, AccordionSummary, AccordionDetails, Snackbar } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from 'axios';

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

  return (
    <Container component="main" maxWidth="lg">
      <Typography variant="h2" component="h1" gutterBottom>
        Suporte
      </Typography>
      
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            Entre em Contato
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Nome"
              name="name"
              value={formData.name}
              onChange={handleChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Mensagem"
              name="message"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
              margin="normal"
              required
            />
            <Button type="submit" variant="contained" sx={{ mt: 2 }}>
              Enviar
            </Button>
          </form>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            Perguntas Frequentes
          </Typography>
          {faqs.map((faq, index) => (
            <Accordion key={index}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Grid>
      </Grid>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        message={snackbarMessage}
      />
    </Container>
  );
}

export default Support;