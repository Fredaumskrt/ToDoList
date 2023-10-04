import React from "react";

const Todo = ({ todo, removeTodo, completeTodo }) => {
  const textStyle = {
    // Condicao com operador ternario para analisar se a tarefa foi concluida, se tiver, passe um line-through!!!!
    textDecoration: todo.isCompleted ? "line-through" : "none",
  };

  return (
    <div
      className={`todo ${todo.isCompleted ? "completed" : ""}`}
      key={todo.id}

      //Container para botao e texto, para que nao haja quebra de responsividade!!!!!
    >
      <div className="containerText">
        <p style={textStyle}>{todo.text}</p>
        <p>Categoria: {todo.category}</p>
        {todo.date && <p>Data: {todo.date}</p>}
      </div>

      <div className="containerButton">
        <button onClick={() => completeTodo(todo.id)}>
          {todo.isCompleted ? "Desfazer" : "Concluir"}
        </button>
        <button className="remove" onClick={() => removeTodo(todo.id)}>
          X
        </button>
      </div>
    </div>
  );
};

export default Todo;
