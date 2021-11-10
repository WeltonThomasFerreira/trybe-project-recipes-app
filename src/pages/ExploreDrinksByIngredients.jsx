/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import {
  fetchIngredientsDrink,
  callFunctionDrinksTrue } from '../redux/slices/ingredientsDrinkSlice';
import { setQuery, setOption } from '../redux/slices/searchBarSlice';

export default function ExploreDrinksByIngredients() {
  const title = 'Explorar Ingredientes';
  const MAX_LENGTH = 12;
  const { ingredientsDrinkApi } = useSelector((store) => store.ingredientsListDrink);
  const filteredIngredientsDrink = ingredientsDrinkApi.slice(0, MAX_LENGTH);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIngredientsDrink());
  }, []);

  const handleClick = (nome) => {
    dispatch(setQuery(nome));
    dispatch(setOption('ingredient'));
    dispatch(callFunctionDrinksTrue());
  };

  return (
    <>
      <Header title={ title } />
      {filteredIngredientsDrink.map((element, index) => (
        <Link
          key={ index }
          to="/bebidas"
          onClick={ () => handleClick(element.strIngredient1) }
        >
          <div
            key={ index }
            data-testid={ `${index}-ingredient-card` }
          >
            <p data-testid={ `${index}-card-name` }>{element.strIngredient1}</p>
            <img
              data-testid={ `${index}-card-img` }
              src={ `https://www.thecocktaildb.com/images/ingredients/${element.strIngredient1}-Small.png` }
              alt="imagem do ingrediente"
            />
          </div>
        </Link>
      ))}

      <Footer />
    </>
  );
}
