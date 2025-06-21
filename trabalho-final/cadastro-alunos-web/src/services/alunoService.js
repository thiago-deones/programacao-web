import axios from "axios";

const API_URL = "http://leoproti.com.br:8004/alunos";

const alunoService = {
  listar: async () => {
    const response = await axios.get(API_URL);
    return response.data;
  },

  obter: async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  },

  criar: async (aluno) => {
    const response = await axios.post(API_URL, aluno);
    return response.data;
  },

  atualizar: async (id, aluno) => {
    const response = await axios.put(`${API_URL}/${id}`, aluno);
    return response.data;
  },

  excluir: async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  },
};

export default alunoService;