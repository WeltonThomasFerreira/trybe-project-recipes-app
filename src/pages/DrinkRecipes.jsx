import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import { fetchDrinks } from '../redux/slices/drinkRecipesSlice';

export default function DrinkRecipes() {
  const title = 'Bebidas';
  const dispatch = useDispatch();
  const { query, option } = useSelector((store) => store.searchBar);

  const handleSubmit = () => {
    const payload = { query, option };
    if (query.length !== 1 && option === 'firstLetter') {
      global.alert('Sua busca deve conter somente 1 (um) caracter');
      console.log(query.length);
    } else {
      dispatch(fetchDrinks(payload));
    }
  };

  return (
    <Header
      title={ title }
      searchBar={ <SearchBar handleSubmit={ handleSubmit } /> }
    />
  );
}
