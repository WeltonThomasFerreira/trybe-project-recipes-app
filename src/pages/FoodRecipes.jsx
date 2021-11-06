import React from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

export default function FoodRecipes() {
  const title = 'Comidas';

  return <Header title={ title } searchBar={ <SearchBar /> } />;
}
