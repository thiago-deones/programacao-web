import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Box,
} from '@mui/material';

const ListarProdutos = () => {
  const [produtos, setProdutos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    buscarProdutos();
  }, []);

  const buscarProdutos = async () => {
    try {
      const resposta = await axios.get('http://leoproti.com.br:8004/produtos');
      setProdutos(resposta.data);
    } catch (error) {
      alert('Erro ao buscar produtos');
      console.error(error);
    }
  };

  const deletarProduto = async (id) => {
    if (window.confirm('Tem certeza que deseja excluir este produto?')) {
      try {
        await axios.delete(`http://leoproti.com.br:8004/produtos/${id}`);
        buscarProdutos(); // Atualiza a lista
      } catch (error) {
        alert('Erro ao excluir produto');
        console.error(error);
      }
    }
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography 
      variant="h5"
      gutterBottom
      align='center'
      sx={{ 
        fontWeight: 'bold',
        fontSize: 'clamp(1.5rem, 5vw, 2.625rem)'
      }}
      >
        Lista de Produtos
      </Typography>
      <Box>
        <Table>
          <TableHead>
  <TableRow>
    <TableCell sx={{ fontSize: { xs: '0.8rem', sm: '1rem', md: '1.1rem' }, fontWeight: 'bold' }}>ID</TableCell>
    <TableCell sx={{ fontSize: { xs: '0.8rem', sm: '1rem', md: '1.1rem' }, fontWeight: 'bold' }}>Nome</TableCell>
    <TableCell sx={{ fontSize: { xs: '0.8rem', sm: '1rem', md: '1.1rem' }, fontWeight: 'bold' }}>Preço</TableCell>
    <TableCell sx={{ fontSize: { xs: '0.8rem', sm: '1rem', md: '1.1rem' }, fontWeight: 'bold' }}>Ações</TableCell>
  </TableRow>
</TableHead>
<TableBody>
  {produtos.map((produto) => (
    <TableRow key={produto.id}>
      <TableCell sx={{ fontSize: { xs: '0.85rem', sm: '1rem' } }}>{produto.id}</TableCell>
      <TableCell sx={{ fontSize: { xs: '0.85rem', sm: '1rem' } }}>{produto.nome}</TableCell>
      <TableCell sx={{ fontSize: { xs: '0.85rem', sm: '1rem' } }}>R$ {produto.preco.toFixed(2)}</TableCell>
      <TableCell>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => navigate(`/editar/${produto.id}`)}
          sx={{ mr: 1, fontSize: { xs: '0.75rem', sm: '0.9rem' } }}
        >
          Editar
        </Button>
        <Button
          variant="outlined"
          color="error"
          onClick={() => deletarProduto(produto.id)}
          sx={{ fontSize: { xs: '0.75rem', sm: '0.9rem' } }}
        >
          Excluir
        </Button>
      </TableCell>
    </TableRow>
  ))}
</TableBody>

        </Table>
      </Box>
    </Container>
  );
};

export default ListarProdutos;