import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import DrinkRecipeCard from '../components/DrinkRecipeCard';
import { fetchDrinks, populateDrinks } from '../redux/slices/drinkRecipesSlice';

export default function DrinkRecipes() {
  const title = 'Bebidas';
  const history = useHistory();
  const dispatch = useDispatch();
  const { query, option } = useSelector((store) => store.searchBar);
  const { drinks } = useSelector((store) => store.drinkRecipes);

  const handleSubmit = () => {
    const payload = { query, option };
    if (query.length !== 1 && option === 'firstLetter') {
      global.alert('Sua busca deve conter somente 1 (um) caracter');
      console.log(query.length);
    } else {
      dispatch(fetchDrinks(payload));
    }
  };

  const renderDrinkCards = () => {
    const MAX_LENGTH = 12;
    if (!drinks) {
      global.alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
    } else if (drinks.length === 1) {
      history.push(`/bebidas/${drinks[0].idDrink}`);
    } else {
      const filteredDrinks = drinks.slice(0, MAX_LENGTH);
      return (
        <section>
          { filteredDrinks.map((drink, index) => (
            <DrinkRecipeCard
              key={ drink.idDrink }
              index={ index }
              drink={ drink }
            />
          )) }
        </section>
      );
    }
  };

  useEffect(() => {
    const fetchBaseDrinks = async () => {
      const baseDrinks = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
      const response = await baseDrinks.json();
      dispatch(populateDrinks(response.drinks));
    };
    fetchBaseDrinks();
  }, []);

  return (
    <>
      <Header
        title={ title }
        searchBar={ <SearchBar handleSubmit={ handleSubmit } /> }
      />
      <main>
        { renderDrinkCards() }
      </main>
    </>
  );
}
