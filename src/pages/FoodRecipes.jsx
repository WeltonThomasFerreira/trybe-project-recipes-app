import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header';
import MealRecipeCard from '../components/MealRecipeCard';
import SearchBar from '../components/SearchBar';
import { fetchMeals, populateMeals } from '../redux/slices/foodRecipesSlice';

export default function FoodRecipes() {
  const title = 'Comidas';
  const dispatch = useDispatch();
  const { query, option } = useSelector((store) => store.searchBar);
  const { meals } = useSelector((store) => store.foodRecipes);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    const payload = { query, option };
    if (query.length !== 1 && option === 'firstLetter') {
      global.alert('Sua busca deve conter somente 1 (um) caracter');
      console.log(query.length);
    } else {
      dispatch(fetchMeals(payload));
      setSubmitted(true);
    }
  };

  const renderFoodCards = () => {
    const MAX_LENGTH = 12;
    if (!meals) {
      global.alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
    } else {
      const filteredMeals = meals.slice(0, MAX_LENGTH);
      return (
        <section>
          { filteredMeals.map((meal, index) => (
            <MealRecipeCard
              key={ meal.idMeal }
              index={ index }
              meal={ meal }
            />
          )) }
        </section>
      );
    }
  };

  useEffect(() => {
    const fetchBaseMeals = async () => {
      const baseMeals = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      const response = await baseMeals.json();
      dispatch(populateMeals(response.meals));
    };
    fetchBaseMeals();
  }, []);

  return (
    <>
      <Header
        title={ title }
        searchBar={ <SearchBar handleSubmit={ handleSubmit } /> }
      />
      <main>
        { renderFoodCards() }
      </main>
    </>
  );
}
