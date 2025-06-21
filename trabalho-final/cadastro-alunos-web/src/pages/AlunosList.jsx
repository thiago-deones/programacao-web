import React, { useEffect, useState } from 'react';
import axios from 'axios';
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
  Stack,
  Paper,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AlunosList = () => {
  const [alunos, setAlunos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    buscarAlunos();
  }, []);

  const buscarAlunos = async () => {
    try {
      const resposta = await axios.get('http://leoproti.com.br:8004/alunos');
      setAlunos(resposta.data);
    } catch (error) {
      alert('Erro ao buscar alunos');
    }
  };

  const deletarAluno = async (id) => {
    if (window.confirm('Tem certeza que deseja excluir este aluno?')) {
      try {
        await axios.delete(`http://leoproti.com.br:8004/alunos/${id}`);
        buscarAlunos();
      } catch (error) {
        alert('Erro ao excluir aluno');
      }
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      {/* Cabeçalho com título e botão */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ color: '#1976d2' }}
        >
          Lista de Alunos
        </Typography>

        <Button
          variant="contained"
          onClick={() => navigate('/alunos/novo')}
          sx={{
            backgroundColor: '#1976d2',
            fontWeight: 'bold',
            '&:hover': { backgroundColor: '#125aa1' },
          }}
        >
          Novo Aluno
        </Button>
      </Stack>

      {/* Tabela */}
      <Paper elevation={3}>
        <Table>
          <TableHead sx={{ backgroundColor: '#e3f2fd' }}>
            <TableRow>
              <TableCell><strong>ID</strong></TableCell>
              <TableCell><strong>Nome</strong></TableCell>
              <TableCell><strong>Turma</strong></TableCell>
              <TableCell><strong>Curso</strong></TableCell>
              <TableCell><strong>Matrícula</strong></TableCell>
              <TableCell><strong>Ações</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {alunos.map((aluno) => (
              <TableRow key={aluno.id}>
                <TableCell>{aluno.id}</TableCell>
                <TableCell>{aluno.nome}</TableCell>
                <TableCell>{aluno.turma}</TableCell>
                <TableCell>{aluno.curso}</TableCell>
                <TableCell>{aluno.matricula}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="primary"
                    sx={{ mr: 1 }}
                    onClick={() => navigate(`/alunos/${aluno.id}`)}
                  >
                    Editar
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => deletarAluno(aluno.id)}
                  >
                    Excluir
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
};

export default AlunosList;