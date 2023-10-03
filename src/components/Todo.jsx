import React from "react";

const Todo = ({ todo, removeTodo, completeTodo }) => {
  // ---------------------- 
  // Centralizacao dos botoes "Concluir" e "X"
  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "flex-end",
  };
// --------------------------


  return ( 
    <div
      className={`todo ${todo.isCompleted ? "completed" : ""}`}
      key={todo.id}
    >
      <p>{todo.text}</p>
      <p>Categoria: {todo.category}</p>
      {todo.date && <p>Data: {todo.date}</p>}
      <div style={buttonContainerStyle}>
        <button onClick={() => completeTodo(todo.id)}>
          {todo.isCompleted ? "Desfazer" : "Concluir"}
        </button>
        <button onClick={() => removeTodo(todo.id)}>X</button>
      </div>
    </div>
  );
};

export default Todo;