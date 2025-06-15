import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

const CriarProduto = () => {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://leoproti.com.br:8004/produtos', {
        nome,
        preco: parseFloat(preco),
      });
      alert('Produto criado com sucesso!');
      navigate('/');
    } catch (error) {
      alert('Erro ao criar produto');
      console.error(error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Criar Novo Produto
        </Typography>
        <TextField
          label="Nome do Produto"
          fullWidth
          margin="normal"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <TextField
          label="Preço"
          type="number"
          fullWidth
          margin="normal"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Criar Produto
        </Button>
      </Box>
    </Container>
  );
};

export default CriarProduto;
