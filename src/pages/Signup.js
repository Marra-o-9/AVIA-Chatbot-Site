import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';

const Signup = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Adicione validação e lógica de envio
  };

  return (
    <Container>
      <Typography variant="h3" color="primary" gutterBottom>
        Cadastro
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nome"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Senha"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" type="submit">
          Cadastrar
        </Button>
      </form>
    </Container>
  );
};

export default Signup;
