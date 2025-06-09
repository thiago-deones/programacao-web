import { use, useEffect, useState } from 'react'
import './App.css'
import UseEffectExample from './componets/UseEffectExample'

function App() {
  const [count, setCount] = useState(0);

      //com dependências vazias/ array dep. vazio
      useEffect(() => {
        console.log('ta liso 2 ')
      }, []);
      
      //sem dependencias
      useEffect(() => {
        console.log('ta liso')
      });

      //com dependências
      useEffect(() => {
        console.log('ta liso 3');
      }, [count])

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>adicionar</button>
    </>
  )
}

export default App
