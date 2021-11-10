import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { fetchIngredients } from '../redux/slices/ingredientListSlice';
import { setOption, setQuery } from '../redux/slices/searchBarSlice';

export default function ExploreFoodsByIngredients() {
  const title = 'Explorar Ingredientes';
  const MAX_LENGTH = 12;
  const { ingredientsApi } = useSelector((store) => store.ingredientsList);
  const filteredIngredients = ingredientsApi.slice(0, MAX_LENGTH);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIngredients());
  }, []);

  const handleClick = (nome) => {
    // const payload = { query: nome, option: 'ingredient' };
    // dispatch(fetchMeals(payload));
    dispatch(setQuery(nome));
    dispatch(setOption('ingredient'));
    console.log(nome);
  };

  return (
    <>
      <Header title={ title } />
      {filteredIngredients.map((element, index) => (
        <Link
          onClick={ () => handleClick(element.strIngredient) }
          key={ index }
          to="/comidas"
        >
          <div
            value={ element.strIngredient }
            key={ index }
            data-testid={ `${index}-ingredient-card` }
          >
            <p
              data-testid={ `${index}-card-name` }
              value={ element.strIngredient }
            >
              {element.strIngredient}
            </p>
            <img
              data-testid={ `${index}-card-img` }
              src={ `https://www.themealdb.com/images/ingredients/${element.strIngredient}-Small.png` }
              alt="imagem do ingrediente"
              value={ element.strIngredient }
            />
          </div>
        </Link>
      ))}
      <Footer />
    </>
  );
}
