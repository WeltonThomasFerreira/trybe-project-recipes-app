import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
// Thomaz && Felippe
const container = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  position: 'fixed',
  left: 0,
  bottom: 0,
  width: '100%',
  textAling: 'center',
};

export default function Footer() {
  return (
    <footer style={ container } data-testid="footer">
      <Link to="/bebidas">
        <img
          src={ drinkIcon }
          alt="bebidas"
          data-testid="drinks-bottom-btn"
        />
      </Link>
      <Link to="/explorar">
        <img
          src={ exploreIcon }
          alt="bebidas"
          data-testid="explore-bottom-btn"
        />
      </Link>
      <Link to="/comidas">
        <img
          src={ mealIcon }
          alt="bebidas"
          data-testid="food-bottom-btn"
        />
      </Link>
    </footer>
  );
}
