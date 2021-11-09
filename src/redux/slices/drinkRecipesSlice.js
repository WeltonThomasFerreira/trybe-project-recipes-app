import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  drinks: [],
};

export const fetchDrinks = createAsyncThunk(
  'drinkRecipes/fetchDrinks',
  async (payload) => {
    const { query, option } = payload;
    let response = {};
    switch (option) {
    case 'ingredient':
      response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${query}`,
      );
      break;
    case 'name':
      response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`,
      );
      break;
    case 'firstLetter':
      response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${query}`,
      );
      break;
    default:
      break;
    }
    return response.json();
  },
);

export const fetchDrinksByCategory = createAsyncThunk(
  'drinkRecipes/fetchDrinksByCategory',
  async (category) => {
    const data = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
    const response = await data.json();
    return response;
  },
);

export const drinkRecipesSlice = createSlice({
  name: 'drinkRecipes',
  initialState,
  reducers: {
    populateDrinks: (state, action) => {
      state.drinks = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDrinks.fulfilled, (state, action) => {
        state.drinks = action.payload.drinks;
      });
    builder
      .addCase(fetchDrinks.rejected, (state) => {
        state.drinks = null;
      });
    builder
      .addCase(fetchDrinksByCategory.fulfilled, (state, action) => {
        state.drinks = action.payload.drinks;
      });
  },
});

export const { populateDrinks } = drinkRecipesSlice.actions;

export default drinkRecipesSlice.reducer;
