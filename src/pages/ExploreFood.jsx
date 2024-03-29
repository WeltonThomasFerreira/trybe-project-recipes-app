import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function ExploreFood() {
  const title = 'Explorar Comidas';

  return (
    <>
      <Header title={ title } />
      <Link to="/explorar/comidas/ingredientes">
        <button
          type="button"
          data-testid="explore-by-ingredient"
        >
          Por Ingredientes

        </button>
      </Link>
      <Link to="/explorar/comidas/area">
        <button
          type="button"
          data-testid="explore-by-area"
        >
          Por Local de Origem
        </button>
      </Link>
      <Link to="/">
        <button
          type="button"
          data-testid="explore-surprise"
        >
          Me Surpreenda!
        </button>
      </Link>
      ;
      <Footer />
    </>
  );
}
