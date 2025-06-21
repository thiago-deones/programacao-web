import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Stack,
} from "@mui/material";

const API_URL = "http://leoproti.com.br:8004/alunos";

const AlunoForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [aluno, setAluno] = useState({
    nome: "",
    turma: "",
    curso: "",
    matricula: "",
  });

  useEffect(() => {
    if (id) {
      axios
        .get(`${API_URL}/${id}`)
        .then((res) => setAluno(res.data))
        .catch(() => alert("Erro ao buscar aluno"));
    }
  }, [id]);

  const handleChange = (e) => {
    setAluno({ ...aluno, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (id) {
        await axios.put(`${API_URL}/${id}`, aluno);
        alert("Aluno atualizado com sucesso!");
      } else {
        await axios.post(API_URL, aluno);
        alert("Aluno cadastrado com sucesso!");
      }

      navigate("/alunos");
    } catch (err) {
      alert("Erro ao salvar aluno");
      console.error(err);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h5" align="center" fontWeight="bold" gutterBottom>
        {id ? "Editar Aluno" : "Cadastrar Novo Aluno"}
      </Typography>

      <Box component="form" onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            label="Nome"
            name="nome"
            value={aluno.nome}
            onChange={handleChange}
            required
          />
          <TextField
            label="Turma"
            name="turma"
            value={aluno.turma}
            onChange={handleChange}
            required
          />
          <TextField
            label="Curso"
            name="curso"
            value={aluno.curso}
            onChange={handleChange}
            required
          />
          <TextField
            label="Matrícula"
            name="matricula"
            value={aluno.matricula}
            onChange={handleChange}
            required
          />
          <Button type="submit" variant="contained" color="primary">
            {id ? "Salvar Alterações" : "Cadastrar"}
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => navigate("/alunos")}
          >
            Cancelar
          </Button>
        </Stack>
      </Box>
    </Container>
  );
};

export default AlunoForm;