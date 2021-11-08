import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  meals: [],
};

export const fetchMeals = createAsyncThunk(
  'foodRecipes/fetchMeals',
  async (payload) => {
    const { query, option } = payload;
    let response = {};
    switch (option) {
    case 'ingredient':
      response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${query}`,
      );
      break;
    case 'name':
      response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`,
      );
      break;
    case 'firstLetter':
      response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${query}`,
      );
      break;
    default:
      break;
    }
    return response.json();
  },
);

export const foodRecipesSlice = createSlice({
  name: 'foodRecipes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMeals.fulfilled, (state, action) => {
        state.meals = action.payload.meals;
      })
      .addCase(fetchMeals.rejected, (state) => {
        state.meals = ['Nenhum correspondência'];
      });
  },
});

export default foodRecipesSlice.reducer;
