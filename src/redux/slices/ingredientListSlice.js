import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  ingredientsApi: [],
  error: '',
};

export const fetchIngredients = createAsyncThunk(
  'ingredientList/fetchIngredients',
  async () => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
    return response.json();
  },
);

export const ingredientListSlice = createSlice({
  name: 'ingredientList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchIngredients.fulfilled, (state, action) => {
        state.ingredientsApi = action.payload.meals;
      })
      .addCase(fetchIngredients.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default ingredientListSlice.reducer;
