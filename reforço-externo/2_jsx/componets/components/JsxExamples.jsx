import React from 'react'

const JsxExamples = () => {


  const userName = 'João';

  const user = {
    name: 'João',
    age: 30
  };

  return (
    <div>
        <h2>Conteúdo que o usuário vai ver</h2>
        {/* O que o usuário não vai ver */}
        <p>O nome do usúario é: {userName}</p>

        <p>Usúario: {user.name} {user.age}</p>

        <p>{2+2}</p>
    </div>
  )
}

export default JsxExamples