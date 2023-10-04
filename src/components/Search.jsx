import React from 'react';

// Funcao extra para pesquisar lembretes existentes e ou adicionados !!!!!!

const Search = ({ search, setSearch }) => {
  return (
    <div className="search">
      <h2>Pesquisar:</h2>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Digite para pesquisar..."
      />
    </div>
  );
};

export default Search;
