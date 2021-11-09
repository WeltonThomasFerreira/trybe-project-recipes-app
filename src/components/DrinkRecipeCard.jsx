import PropTypes from 'prop-types';
import React from 'react';

export default function DrinkRecipeCard({ drink, index }) {
  return (
    <div data-testid={ `${index}-recipe-card` }>
      <img
        data-testid={ `${index}-card-img` }
        src={ drink.strDrinkThumb }
        alt={ drink.strDrink }
        width="100"
      />
      <p data-testid={ `${index}-card-name` }>{ drink.strDrink }</p>
    </div>
  );
}

DrinkRecipeCard.propTypes = {
  index: PropTypes.number.isRequired,
  drink: PropTypes.shape({
    strDrink: PropTypes.string.isRequired,
    strDrinkThumb: PropTypes.string.isRequired,
  }).isRequired,
};
