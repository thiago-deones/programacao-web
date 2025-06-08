import {useState} from 'react';

const UseStateComponents = () => {
    //Criação de uma variavel de consulta
    const [count, setCount] = useState(0)
    
    const increment = () => {
        setCount((prevCount) => prevCount + 1);
        console.log(count);
    }

    const [user, setUser] = useState({
        name: 'João',
        age: 30,
        hobbies: ['futebol', 'leitura', 'programação']  
    })

    const updateUserAge = () => {
        setUser((prevUser) => ({
            ...prevUser,
            age: prevUser.age + 1
        }));
    }
    return (
    <div>
        <h2>Contador</h2>
        <p>Você clicou {count} vezes</p>
        <button onClick={increment}>Incrementar</button>
        <p>
            Nome: {user.name} e idade: {user.age}
        </p>

        <button onClick={updateUserAge}>Incrementar Idade</button>
    </div>
  )
}


export default UseStateComponents;