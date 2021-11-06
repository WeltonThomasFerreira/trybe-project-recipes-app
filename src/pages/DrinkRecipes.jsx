import React from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

export default function DrinkRecipes() {
  const title = 'Bebidas';

  return <Header title={ title } searchBar={ <SearchBar /> } />;
}
