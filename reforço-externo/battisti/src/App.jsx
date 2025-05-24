//componente pai
import './App.css';

//importar componente filho
import FunctionalComponent from './components/FunctionalComponent';
import ClassComponents from './components/ClassComponents';
import PropsExempla from './components/PropsExempla';

function App() {

  return (
    <>
      <h1>Hello World React</h1>
      <FunctionalComponent />
      <ClassComponents />
      <PropsExempla nome="Lucas" idade={33} />
    </>
  )
}

export default App
