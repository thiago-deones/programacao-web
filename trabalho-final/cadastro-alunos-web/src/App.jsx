import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AlunosList from './pages/AlunosList';
import NovoAluno from './pages/NovoAluno';
import EditarAluno from './pages/EditarAluno';
import { Box } from "@mui/material"

export default function App() {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f5fafd' }}>
    <BrowserRouter>
      <Routes>
        <Route path="/alunos" element={<AlunosList />} />
        <Route path="/alunos/novo" element={<NovoAluno />} />
        <Route path="/alunos/:id" element={<EditarAluno />} />
        <Route path="*" element={<AlunosList />} />
      </Routes>
    </BrowserRouter>
    </Box>
  );
}
