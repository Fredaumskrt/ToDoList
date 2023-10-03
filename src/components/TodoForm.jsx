import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !category || !date) return;
    addTodo(value, category, date);
    setValue("");
    setCategory("");
    setDate("");

    console.log(value, category, date);
  };

  return (
    <div className="todo-form">
      <h2>Criação de Lembretes</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite um novo lembrete"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
        </select>

        <input
          type="date"
          placeholder="Selecione uma data"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button type="submit">Criar Lembrete</button>
      </form>
    </div>
  );
};

export default TodoForm;
