import { use, useState } from 'react';
import './App.css';
import'bootstrap-icons/font/bootstrap-icons.css';
import brasCubas from './assets/bras_cubas.jpeg';
import Capa from './Capa';
import SeletorCapitulos from './SeletorCapitulos';
import BotoesControle from './BotoesControle';

function App() {

  //let taTocando = false;
  const [taTocando, definirTaTocando] = useState(false);
    const informacoesLivro = {
    nome: 'Memórias Póstumas de Brás Cubas',
    autor: 'Machado de Assis',
    totalCapitulo: 2,
    imagemCapa: brasCubas,
    textAlternativo: 'Capa do livro Memórias Póstumas de Brás Cubas',
  };

  return<>
    <Capa imagemCapa = {informacoesLivro.imagemCapa} textAlternativo = {informacoesLivro.textAlternativo}/>
    <SeletorCapitulos capituloAtual={1} />
    <BotoesControle taTocando={taTocando} definirTaTocando={definirTaTocando} />
  </>;
}

export default App
