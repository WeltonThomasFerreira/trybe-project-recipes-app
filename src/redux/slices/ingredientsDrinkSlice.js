import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  ingredientsDrinkApi: [],
  error: '',
  callFunctionDrinks: false,
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
  reducers: {
    callFunctionDrinksTrue(state) {
      state.callFunctionDrinks = true;
    },
  },
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

export const { callFunctionDrinksTrue } = ingredientListDrinkSlice.actions;
export default ingredientListDrinkSlice.reducer;
