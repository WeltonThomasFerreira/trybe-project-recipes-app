import PropTypes from 'prop-types';
import React from 'react';
import '../styles/mealDetail.css';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

export default function MealRecipeCard({ meal, index }) {
  const history = useHistory();
  const { meals } = useSelector((store) => store.foodRecipes);

  const redirectToDetails = () => {
    history.push(`/comidas/${meals[index].idMeal}`);
  };

  return (
    <div
      data-testid={ `${index}-recipe-card` }
    >
      <button type="button" onClick={ () => redirectToDetails() }>
        <img
          data-testid={ `${index}-card-img` }
          src={ meal.strMealThumb }
          alt={ meal.strMeal }
          width="100"
        />
        <p data-testid={ `${index}-card-name` }>{ meal.strMeal }</p>
      </button>
    </div>
  );
}

MealRecipeCard.propTypes = {
  index: PropTypes.number.isRequired,
  meal: PropTypes.shape({
    strMeal: PropTypes.string.isRequired,
    strMealThumb: PropTypes.string.isRequired,
  }).isRequired,
};
