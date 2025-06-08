import { useState } from 'react';
import './ToDoApp.css';

function ToDoApp() {
  // Estado da lista de tarefas
  const [todos, setTodos] = useState([]);

  // Estado do campo de entrada
  const [inputValue, setInputValue] = useState('');

  // Adicionar nova tarefa
  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
      };

      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setInputValue('');
    }
  };

  // Excluir tarefa por ID
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Limpar todas as tarefas
  const handleClearAll = () => {
    setTodos([]);
  };

  return (
    <div className="todo-container">
      <h1 className="title">Lista de Tarefas</h1>

      {/* Formulário para adicionar tarefa */}
      <form onSubmit={handleSubmit} className="todo-form">
        <label htmlFor="todo-input" className="sr-only">Nova tarefa</label>
        <input
          id="todo-input"
          type="text"
          placeholder="Adicione uma tarefa"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" className="add-button">Adicionar tarefa</button>
      </form>

      {/* Mensagem se não houver tarefas */}
      {todos.length === 0 && (
        <p className="empty">Nenhuma tarefa cadastrada</p>
      )}

      {/* Lista de tarefas */}
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <span>{todo.text}</span>
            <button
              className="delete-button"
              onClick={() => handleDelete(todo.id)}
            >
              Excluir
            </button>
          </li>
        ))}
      </ul>

      {/* Botão para limpar todas as tarefas */}
      {todos.length > 0 && (
        <button className="clear-button" onClick={handleClearAll}>
          Limpar todas
        </button>
      )}
    </div>
  );
}

export default ToDoApp;
