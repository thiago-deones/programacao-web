import './App.css';
import brasCubas from './assets/bras_cubas.jpeg';
import Capa from './Capa';

function App() {

  const informacoesLivro = {
    nome: 'Memórias Póstumas de Brás Cubas',
    autor: 'Machado de Assis',
    totalCApitulo: 2,
    imagemCapa: brasCubas,
    textAlternativo: 'Capa do livro Memórias Póstumas de Brás Cubas',
  };

  return<>
    <Capa imagemCapa = {informacoesLivro.imagemCapa} textAlternativo = {informacoesLivro.textAlternativo}/>
  </>;
}

export default App
