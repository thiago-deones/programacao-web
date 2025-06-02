import React from 'react'

const JsxExamples = () => {


  const userName = 'João';

  const user = {
    name: 'Pedro',
    age: 30
  };

  function getGreeting(name) {
    return `Ola ${name}, seja muito bem-vindo!`;
  }

  const userIsLoged = true;

  const userRole = 'admin';

  const users = [
    {id: 1, name: 'João', age: 25 },
    {id: 2, name: 'Maria', age: 28 },
    {id: 3,name: 'Pedro', age: 30 }
  ]
  

  return (
    <div>
        <h2>Conteúdo que o usuário vai ver</h2>
        {/* O que o usuário não vai ver */}
        <p>O nome do usúario é: {userName}</p>

        <p>Usúario: {user.name} {user.age}</p>

        <p>{2+2}</p>

        <p>{getGreeting(user.name)}</p>
        <p>{getGreeting("Maria")}</p>
        <p>{getGreeting(userName)}</p>
        {/* diferenças do html*/}
        <div className="alguma-coisa">Este cara</div>

        <div className='teste'>ok</div>

        <button onClick={() => alert('teste')}>Clicke em mim</button>

        <input type="text" placeholder='Digite algo'/>

        {/* RENDERIZAÇÂO CONDICIONAL */}
        {userIsLoged ? (<p>Caso: está logado</p>) : (<p>Caso: Não está logado</p>)}

        <p>
          {userRole === 'admin' && 'Você é um administrador'}
        </p>
        <div>
          <ul>
            {users.map((user) => (
              <li>
                {user.id} - {user.name}
              </li>
            ))}
          </ul>
        </div>
    </div>

  )
}

export default JsxExamples