import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

export default function DrinkRecipeCard({ drink, index }) {
  return (
    <Link to={ `/bebidas/${drink.idDrink}` }>
      <div data-testid={ `${index}-recipe-card` }>
        <img
          data-testid={ `${index}-card-img` }
          src={ drink.strDrinkThumb }
          alt={ drink.strDrink }
          width="100"
        />
        <p data-testid={ `${index}-card-name` }>{ drink.strDrink }</p>
      </div>
    </Link>
  );
}

DrinkRecipeCard.propTypes = {
  drink: PropTypes.shape({
    idDrink: PropTypes.string.isRequired,
    strDrink: PropTypes.string.isRequired,
    strDrinkThumb: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};
