import { configureStore } from '@reduxjs/toolkit';
import searchBarReducer from './slices/searchBarSlice';
import foodRecipesReducer from './slices/foodRecipesSlice';
import drinkRecipesReducer from './slices/drinkRecipesSlice';
import recipeCategoriesReducer from './slices/recipesCategoriesSlice';
import surpriseRecipeReducer from './slices/surpriseRecipeSlice';

const store = configureStore({
  reducer: {
    searchBar: searchBarReducer,
    foodRecipes: foodRecipesReducer,
    drinkRecipes: drinkRecipesReducer,
    recipeCategories: recipeCategoriesReducer,
    surpiseRecipe: surpriseRecipeReducer,
  },
});

if (window.Cypress) {
  window.store = store;
}

export default store;
