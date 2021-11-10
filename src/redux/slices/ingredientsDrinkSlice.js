import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  ingredientsDrinkApi: [],
  error: '',
};

export const fetchIngredientsDrink = createAsyncThunk(
  'ingredientListDrink/fetchIngredientsDrink',
  async () => {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
    return response.json();
  },
);

export const ingredientListDrinkSlice = createSlice({
  name: 'ingredientsListDrink',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchIngredientsDrink.fulfilled, (state, action) => {
        state.ingredientsDrinkApi = action.payload.drinks;
      })
      .addCase(fetchIngredientsDrink.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});
export default ingredientListDrinkSlice.reducer;
