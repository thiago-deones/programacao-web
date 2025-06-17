import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Paper
} from '@mui/material';


const EditarProduto = () => {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const navigate = useNavigate();
  const { id } = useParams(); // Pega o ID da URL

useEffect(() => {
  axios.get(`http://leoproti.com.br:8004/produtos/${id}`)
    .then(res => {
      setNome(res.data.nome);
      setPreco(res.data.preco);
    })
    .catch(error => {
      alert("Erro ao buscar produto");
      console.error(error);
    });
}, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://leoproti.com.br:8004/produtos/${id}`, {
        nome,
        preco: parseFloat(preco)
      });
      alert("Produto atualizado com sucesso!");
      navigate("/");
    } catch (error) {
      alert("Erro ao atualizar produto");
      console.error(error);
    }
  }

    return (
  <Container maxWidth="sm" sx={{ mt: 4 }}>
    <Paper elevation={3} sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom>
        Editar Produto
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          label="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Preço"
          type="number"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
          fullWidth
          required
          margin="normal"
        />
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <Button type="submit" variant="contained" color="primary">
            Salvar
          </Button>
        </Box>
      </Box>
    </Paper>
  </Container>
);

};

export default EditarProduto;