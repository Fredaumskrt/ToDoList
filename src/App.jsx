import React, { useState } from "react";

import "./App.css";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import Search from "./components/Search";

/*

// Inicialmente, a construcao dos modelos que irao aparecer quando um novo lembrete for adicionad

*/
function App() {
  const [todos, setTodos] = useState([
  
    {
    
      id: 1,
      text: "Fazer teste unitario do GT",
      category: "Trabalho",
      isCompleted: false,
      date: "2023-10-04",
    },
    {
      id: 2,
      text: "Ir pra academia",
      category: "Pessoal",
      isCompleted: false,
      date: "2023-10-14",
    },
    {
      id: 3,
      text: "Estudar .net e node js",
      category: "Estudos",
      isCompleted: false,
      date: "2023-10-11",
    },
  ]);

  const [search, setSearch] = useState("");

  // Adicionar novos lembretes (addTodo) !!!!!!!!!!!

  const addTodo = (text, category, date) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false, // booleano para marcar se concluido ou nao
        date,
      },
    ];
    setTodos(newTodos);
  };

  // Remover lembretes (removeTodo) !!!!!!!!!!!
  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) =>
      todo.id !== id ? todo : null
    );
    setTodos(filteredTodos);
  };

  // Marcar lembretes como completos!!!!!!!!
  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) =>
      todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo
    );
    setTodos(newTodos);
  };

  /*
  -------------------------- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! --------------------------
 
           A caixa do filter, mesmo sendo digitada em upperCase(Maiuscula), e´ passada para lowerCase (Minuscula), para facilitar a busca!!!!!!
 
     */

  return (
    <div className="app">
      <h1>Criação de Lembretes</h1>
      <Search search={search} setSearch={setSearch} />

      <div className="todo-list">
        {todos
          .filter((todo) =>
            todo.text.toLowerCase().includes(search.toLowerCase())
          )
          .map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              removeTodo={removeTodo}
              completeTodo={completeTodo}
            />
          ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
