import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DrinkDetails from './pages/DrinkDetails';
import DrinkProgress from './pages/DrinkProgress';
import DrinkRecipes from './pages/DrinkRecipes';
import Explore from './pages/Explore';
import ExploreDrinks from './pages/ExploreDrinks';
import ExploreDrinksByIngredients from './pages/ExploreDrinksByIngredients';
import ExploreFood from './pages/ExploreFood';
import ExploreFoodsByIngredients from './pages/ExploreFoodsByIngredients';
import ExploreFoodsByOrigin from './pages/ExploreFoodsByOrigin';
import FavoriteRecipes from './pages/FavoriteRecipes';
import FoodDetails from './pages/FoodDetails';
import FoodProgress from './pages/FoodProgress';
import FoodRecipes from './pages/FoodRecipes';
import Home from './pages/Home';
import Profile from './pages/Profile';
import RecipesMade from './pages/RecipesMade';

function App() {
  return (
    <Switch>
      <Route
        path="/explorar/comidas/ingredientes"
        component={ ExploreFoodsByIngredients }
      />
      <Route
        path="/explorar/bebidas/ingredientes"
        component={ ExploreDrinksByIngredients }
      />
      <Route path="/explorar/comidas/area" component={ ExploreFoodsByOrigin } />
      <Route path="/comidas/:id/in-progress" component={ FoodProgress } />
      <Route path="/bebidas/:id/in-progress" component={ DrinkProgress } />
      <Route path="/comidas/:id" component={ FoodDetails } />
      <Route path="/bebidas/:id" component={ DrinkDetails } />
      <Route path="/explorar/comidas" component={ ExploreFood } />
      <Route path="/explorar/bebidas" component={ ExploreDrinks } />
      <Route path="/receitas-feitas" component={ RecipesMade } />
      <Route path="/receitas-favoritas" component={ FavoriteRecipes } />
      <Route path="/perfil" component={ Profile } />
      <Route path="/explorar" component={ Explore } />
      <Route path="/comidas" component={ FoodRecipes } />
      <Route path="/bebidas" component={ DrinkRecipes } />
      <Route exact path="/" component={ Home } />
    </Switch>
  );
}

export default App;
