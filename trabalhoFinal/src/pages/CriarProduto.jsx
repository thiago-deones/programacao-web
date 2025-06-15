import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CriarProduto = () => {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const navigate = useNavigate();

  //funcao criar novo produto
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://leoproti.com.br:8004/produtos', { nome,
        preco: parseFloat(preco)
      });
      alert('Produto criado com sucesso!');
      navigate('/'); // voltar para a lista
    } catch(error) {
      alert('Erro ao criar produto');
      console.error(error); 
    }
    };
    
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome:</label>
        <input 
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        required
         />
      </div>

      <div>
        <label>Preço:</label>
        <input 
        type="text"
        step='0.01'
        value={preco}
        onChange={(e) => setPreco(e.target.value)}
        required
        />
      </div>

      <button type='submit'>Salvar Produto</button>
    </form>
  )
}

export default CriarProduto; 