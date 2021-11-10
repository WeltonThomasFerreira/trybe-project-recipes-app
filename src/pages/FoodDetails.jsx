/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { fetchFoodById } from '../redux/slices/foodRecipesSlice';

export default function FoodDetails() {
  const history = useHistory();
  const path = history.location.pathname;
  const index = path.split('/')[2];
  const dispatch = useDispatch();
  const { mealDetail } = useSelector((store) => store.foodRecipes);

  useEffect(() => {
    const mealDetails = async () => dispatch(fetchFoodById(index));
    mealDetails();
  }, []);

  const mapIngredients = (meal) => {
    const DEZ = 10;
    const items = [];
    const mensure = [];
    for (let i = 1; i < DEZ; i += 1) {
      if (meal[`strIngredient${i}`] !== '') {
        items.push(meal[`strIngredient${i}`]);
        mensure.push(meal[`strMeasure${i}`]);
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

  console.log(mealDetail);
  return (
    <>
      FoodDetail
      {mealDetail.map((meal,position ) => (
        <div key={ meal }>
          <img
            className="img"
            src={ meal.strMealThumb }
            data-testid="recipe-photo"
            alt=""
          />
          <h2 data-testid="recipe-title">{ meal.strMeal}</h2>
          <p data-testid="recipe-category">{meal.strCategory}</p>
          <button type="button" data-testid="share-btn">Compartilhar</button>
          <button type="button" data-testid="favorite-btn">Favoritar</button>
          <div data-testid={ `${index}-ingredient-name-and-measure` }>
            <h3>Ingredientes</h3>
            { mapIngredients(meal)}
          </div>
          <h3>Instruções</h3>
          <p data-testid="instructions">{ meal.strInstructions }</p>
          <h3>Vídeo</h3>
          <iframe
            src={ meal.strYoutube }
            title={ `video ${meal}` }
            frameBorder="0"
            data-testid="video"
            allow=" autoplay; clipboard-write; encrypted-media; picture-in-picture"
          />
          <div data-testid={ `${position}-recomendation-card` } />
          <button type="button" data-testid="start-recipe-btn">Start</button>
        </div>
      ))}
      ;
    </>
  );
}
