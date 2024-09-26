import React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';

const ServiceCard = ({ service }) => {
  return (
    <Card sx={{ backgroundColor: '#1c1c1c', color: '#ffffff' }}>
      <CardContent>
        <Typography variant="h5" component="div" color="primary">
          {service.title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {service.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Saiba Mais
        </Button>
      </CardActions>
    </Card>
  );
};

export default ServiceCard;
