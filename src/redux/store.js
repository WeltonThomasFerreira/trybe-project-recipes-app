import { configureStore } from '@reduxjs/toolkit';
import searchBarReducer from './slices/searchBarSlice';
import foodRecipesReducer from './slices/foodRecipesSlice';
import drinkRecipesReducer from './slices/drinkRecipesSlice';
import recipeCategoriesReducer from './slices/recipesCategoriesSlice';

const store = configureStore({
  reducer: {
    searchBar: searchBarReducer,
    foodRecipes: foodRecipesReducer,
    drinkRecipes: drinkRecipesReducer,
    recipeCategories: recipeCategoriesReducer,
  },
});

if (window.Cypress) {
  window.store = store;
}

export default store;
