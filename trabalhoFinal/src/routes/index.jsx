import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListarProdutos from '../pages/ListarProdutos';
import CriarProdutos from '../pages/CriarProduto';
import EditarProdutos from '../pages/EditarProduto';
import NavBar from '../components/NavBar';

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/' element={<ListarProdutos />} />
                <Route path='/novo' element={<CriarProdutos />} />
                <Route path='/editar/:id' element={<EditarProdutos />} />
            </Routes>
        </BrowserRouter>
    );
}