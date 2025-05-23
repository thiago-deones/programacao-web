import { useState, useRef } from 'react';
import './App.css';
import'bootstrap-icons/font/bootstrap-icons.css';
import brasCubas from './assets/bras_cubas.jpeg';
import Capa from './Capa';
import SeletorCapitulos from './SeletorCapitulos';
import BotoesControle from './BotoesControle';
import livro from './assets/capitulos/livro';
import GerenciadorFaixa from './GerenciadorFaixa';

function App() {

  //let taTocando = false;
  const [taTocando, definirTaTocando] = useState(false);
  const [faixaAtual, definirFaixaAtual] = useState(0);
  const tagAudio = useRef(null);

  const informacoesLivro = {
    nome: 'Memórias Póstumas de Brás Cubas',
    autor: 'Machado de Assis',
    totalCapitulo: 2,
    imagemCapa: brasCubas,
    capitulos: livro,
    textAlternativo: 'Capa do livro Memórias Póstumas de Brás Cubas.',
  };

  const tocarFaixa = () => {
    tagAudio.current.play();
    definirTaTocando(true);
  };
  
    const pausarFaixa = () => {
    tagAudio.current.pause();
    definirTaTocando(false);
  };

  const tocarOuPausarFaixa = () => {
    if (taTocando) {
      pausarFaixa();
    } else {
      tocarFaixa();
    }
  };

  return (
    <>
      <Capa imagemCapa = {informacoesLivro.imagemCapa} textAlternativo = {informacoesLivro.textAlternativo}/>
      <SeletorCapitulos capituloAtual={faixaAtual + 1} />
      <GerenciadorFaixa 
        faixa ={informacoesLivro.capitulos[faixaAtual]} 
        referencia={tagAudio}
      />
        
      <BotoesControle taTocando={taTocando} definirTaTocando={definirTaTocando} />
  </>
  );
}

export default App;
