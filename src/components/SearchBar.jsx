import React from 'react';

const container = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export default function SearchBar() {
  return (
    <div style={ container }>
      <input
        data-testid="search-input"
        type="text"
        placeholder="Buscar receita"
      />
      <button type="button">Buscar</button>
    </div>
  );
}
