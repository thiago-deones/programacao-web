import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListarProdutos from './pages/ListarProdutos';
import CriarProduto from './pages/CriarProduto';
import EditarProduto from './pages/EditarProduto';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <Router>
        <NavBar />
        <Routes>
            <Route path='/' element={<ListarProdutos />}/>
            <Route path='/novo' element={<CriarProduto />}/>
            <Route path='/editar/:id' element={<EditarProduto />}/>
        </Routes>
    </Router>
  )
}

export default App;
