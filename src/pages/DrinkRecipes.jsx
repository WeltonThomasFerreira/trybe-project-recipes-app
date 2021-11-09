/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import DrinkRecipeCard from '../components/DrinkRecipeCard';
import {
  fetchDrinks,
  fetchDrinksByCategory,
  populateDrinks,
} from '../redux/slices/drinkRecipesSlice';
import DrinkCategories from '../components/DrinkCategories';

export default function DrinkRecipes() {
  const title = 'Bebidas';
  const history = useHistory();
  const dispatch = useDispatch();
  const { query, option } = useSelector((store) => store.searchBar);
  const { drinks } = useSelector((store) => store.drinkRecipes);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    const payload = { query, option };
    if (query.length !== 1 && option === 'firstLetter') {
      global.alert('Sua busca deve conter somente 1 (um) caracter');
      console.log(query.length);
    } else {
      dispatch(fetchDrinks(payload));
      if (drinks.length === 1) history.push(`/bebidas/${drinks[0].idDrink}`);
    }
  };

  const handleFilters = ({ target }) => {
    const category = target.value;
    dispatch(fetchDrinksByCategory(category));
  };

  const renderDrinkCards = () => {
    const MAX_LENGTH = 12;
    const filteredDrinks = drinks.slice(0, MAX_LENGTH);
    return (
      <section>
        {filteredDrinks.map((drink, index) => (
          <DrinkRecipeCard key={ drink.idDrink } index={ index } drink={ drink } />
        ))}
      </section>
    );
  };

  useEffect(() => {
    const fetchBaseDrinks = async () => {
      const baseDrinks = await fetch(
        'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
      );
      const response = await baseDrinks.json();
      dispatch(populateDrinks(response.drinks));
    };
    fetchBaseDrinks();
  }, []);

  useEffect(() => {
    if (!drinks) {
      global.alert(
        'Sinto muito, não encontramos nenhuma receita para esses filtros.',
      );
    } else if (submitted === true && drinks.length === 1) {
      history.push(`/bebidas/${drinks[0].idDrink}`);
    }
  }, [drinks]);

  return (
    <>
      <Header
        title={ title }
        searchBar={ <SearchBar handleSubmit={ handleSubmit } /> }
      />
      <main>
        <DrinkCategories handleFilters={ handleFilters } />
        {drinks && renderDrinkCards()}
      </main>
    </>
  );
}
