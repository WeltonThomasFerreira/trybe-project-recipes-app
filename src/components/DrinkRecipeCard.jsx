import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

export default function DrinkRecipeCard({ drink, index }) {
  const history = useHistory();
  const { drinks } = useSelector((store) => store.drinkRecipes);

  const redirectToDetails = () => {
    console.log(drinks[index].idDrink);
    history.push(`/bebidas/${drinks[index].idDrink}`);
  };

  return (
    <div data-testid={ `${index}-recipe-card` }>
      <button type="button" onClick={ () => redirectToDetails() }>
        <img
          data-testid={ `${index}-card-img` }
          src={ drink.strDrinkThumb }
          alt={ drink.strDrink }
          width="100"
        />
        <p data-testid={ `${index}-card-name` }>{ drink.strDrink }</p>
      </button>
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
