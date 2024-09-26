import React from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';

const Support = () => {
  return (
    <Container>
      <Typography variant="h3" color="primary" gutterBottom>
        Feedback e Suporte
      </Typography>
      <TextField label="Seu Feedback" multiline rows={4} fullWidth margin="normal" />
      <Button variant="contained" color="primary">
        Enviar Feedback
      </Button>
    </Container>
  );
};

export default Support;
