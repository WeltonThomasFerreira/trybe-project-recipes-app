import React from 'react';

const container = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export default function SearchBar() {
  return (
    <>
      <div style={ container }>
        <fieldset>
          <input
            data-testid="search-input"
            type="text"
            placeholder="Buscar receita"
          />
          <button data-testid="exec-search-btn" type="button">
            Buscar
          </button>
        </fieldset>
      </div>
      <div style={ container }>
        <fieldset>
          <label htmlFor="ingredient">
            <input
              data-testid="ingredient-search-radio"
              type="radio"
              id="ingredient"
            />
            Ingrediente
          </label>
          <label data-testid="name-search-radio" htmlFor="name">
            <input type="radio" id="name" />
            Nome
          </label>
          <label data-testid="first-letter-search-radio" htmlFor="firstLetter">
            <input type="radio" id="firstLetter" />
            Primeira Letra
          </label>
        </fieldset>
      </div>
    </>
  );
}
