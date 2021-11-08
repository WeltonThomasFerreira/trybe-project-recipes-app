import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  drinks: [],
};

export const fetchDrinks = createAsyncThunk(
  'drinkRecipes/fetchDrinkss',
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

export const drinkRecipesSlice = createSlice({
  name: 'drinkRecipes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDrinks.fulfilled, (state, action) => {
        state.drinks = action.payload.drinks;
      })
      .addCase(fetchDrinks.rejected, (state) => {
        state.drinks = ['Nenhum correspondência'];
      });
  },
});

export default drinkRecipesSlice.reducer;
