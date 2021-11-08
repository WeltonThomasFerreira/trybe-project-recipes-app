import PropTypes from 'prop-types';
import React from 'react';

export default function MealRecipeCard({ meal, index }) {
  return (
    <div data-testid={ `${index}-recipe-card` }>
      <img
        data-testid={ `${index}-card-img` }
        src={ meal.strMealThumb }
        alt={ meal.strMeal }
        width="100"
      />
      <p data-testid={ `${index}-card-name` }>{ meal.strMeal }</p>
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
