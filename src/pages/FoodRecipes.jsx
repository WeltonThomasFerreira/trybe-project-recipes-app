import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import { fetchMeals } from '../redux/slices/foodRecipesSlice';

export default function FoodRecipes() {
  const title = 'Comidas';
  const dispatch = useDispatch();
  const { query, option } = useSelector((store) => store.searchBar);

  const handleSubmit = () => {
    const payload = { query, option };
    if (query.length !== 1 && option === 'firstLetter') {
      global.alert('Sua busca deve conter somente 1 (um) caracter');
      console.log(query.length);
    } else {
      dispatch(fetchMeals(payload));
    }
  };

  return (
    <Header
      title={ title }
      searchBar={ <SearchBar handleSubmit={ handleSubmit } /> }
    />
  );
}
