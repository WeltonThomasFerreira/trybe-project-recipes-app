import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  meals: [],
  loading: false,
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

export const fetchMealsByCategory = createAsyncThunk(
  'foodRecipes/fetchMealsByCategory',
  async (category) => {
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    const response = await data.json();
    return response;
  },
);

export const foodRecipesSlice = createSlice({
  name: 'foodRecipes',
  initialState,
  reducers: {
    populateMeals: (state, action) => {
      state.meals = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMeals.fulfilled, (state, action) => {
        state.meals = action.payload.meals;
        state.loading = false;
      })
      .addCase(fetchMeals.rejected, (state) => {
        state.meals = null;
      })
      .addCase(fetchMeals.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMealsByCategory.fulfilled, (state, action) => {
        state.meals = action.payload.meals;
      });
  },
});

export const { populateMeals } = foodRecipesSlice.actions;

export default foodRecipesSlice.reducer;
