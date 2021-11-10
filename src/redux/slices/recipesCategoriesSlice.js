import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  foodCategories: [],
  drinkCategories: [],
  error: '',
};

export const fetchFoodCategories = createAsyncThunk(
  'recipeCategories/fetchFoodCategories',
  async () => {
    const data = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
    const response = await data.json();
    return response.meals;
  },
);

export const fetchDrinkCategories = createAsyncThunk(
  'recipeCategories/fetchDrinkCategories',
  async () => {
    const data = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
    const response = await data.json();
    return response.drinks;
  },
);

const recipeCategoriesSlice = createSlice({
  name: 'recipeCategories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFoodCategories.fulfilled, (state, action) => {
        state.foodCategories = action.payload;
      });
    builder
      .addCase(fetchFoodCategories.rejected, (state) => {
        state.error = 'Ocorreu um erro ao consultar as categorias das comidas.';
      });
    builder
      .addCase(fetchDrinkCategories.fulfilled, (state, action) => {
        state.drinkCategories = action.payload;
      });
    builder
      .addCase(fetchDrinkCategories.rejected, (state) => {
        state.error = 'Ocorreu um erro ao consultar as categorias das bebidas.';
      });
  },
});

export default recipeCategoriesSlice.reducer;
