import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Stack,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const API_URL = "http://leoproti.com.br:8004/alunos";

export default function NovoAluno() {
  const navigate = useNavigate();
  const [aluno, setAluno] = useState({
    nome: "",
    turma: "",
    curso: "",
    matricula: "",
  });

  const handleChange = (e) => {
    setAluno({ ...aluno, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(API_URL, aluno);
      alert("Aluno cadastrado com sucesso!");
      navigate("/alunos");
    } catch (error) {
      alert("Erro ao cadastrar aluno.");
      console.error(error);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h5" align="center" fontWeight="bold" gutterBottom>
        Cadastrar Novo Aluno
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField label="Nome" name="nome" value={aluno.nome} onChange={handleChange} required />
          <TextField label="Turma" name="turma" value={aluno.turma} onChange={handleChange} required />
          <TextField label="Curso" name="curso" value={aluno.curso} onChange={handleChange} required />
          <TextField label="Matrícula" name="matricula" value={aluno.matricula} onChange={handleChange} required />
          <Button type="submit" variant="contained" color="primary">
            Cadastrar
          </Button>
          <Button variant="outlined" color="secondary" onClick={() => navigate("/alunos")}>
            Cancelar
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}