/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { fetchDrinkById } from '../redux/slices/drinkRecipesSlice';

export default function DrinkDetails() {
  const history = useHistory();
  const path = history.location.pathname;
  const index = path.split('/')[2];
  const dispatch = useDispatch();
  const { drinkDetail } = useSelector((store) => store.drinkRecipes);

  useEffect(() => {
    const drinkDetails = async () => dispatch(fetchDrinkById(index));
    drinkDetails();
  }, []);

  const mapIngredients = (drink) => {
    const DEZ = 10;
    const items = [];
    const mensure = [];
    for (let i = 1; i < DEZ; i += 1) {
      if (drink[`strIngredient${i}`] !== null) {
        items.push(drink[`strIngredient${i}`]);
        mensure.push(drink[`strMeasure${i}`]);
      }
    }
    return items.map((element, i) => (
      <p
        key={ element }
        data-testid={ `${i}-ingredient-name-and-measure` }
      >
        {element}
        -
        { mensure[i] }
      </p>
    ));
  };

  console.log(drinkDetail);
  return (
    <>
      DrinkDetails
      {drinkDetail.map((drink, position) => (
        <div key={ drink }>
          <img
            className="img"
            src={ drink.strDrinkThumb }
            data-testid="recipe-photo"
            alt=""
          />
          <h3 data-testid="recipe-title">{ drink.strDrink}</h3>
          <p data-testid="recipe-category">{drink.strAlcoholic}</p>
          <button type="button" data-testid="share-btn">Compartilhar</button>
          <button type="button" data-testid="favorite-btn">Favoritar</button>
          <div>
            <h2>Ingredientes</h2>
            { mapIngredients(drink)}
          </div>
          <h3>Instruções</h3>
          <p data-testid="instructions">{ drink.strInstructions }</p>
          <div data-testid={ `${position}-recomendation-card` } />
          <button type="button" data-testid="start-recipe-btn">Start</button>
        </div>
      ))}
    </>

  );
}
