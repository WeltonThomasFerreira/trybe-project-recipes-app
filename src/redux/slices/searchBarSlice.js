import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  query: '',
  option: '',
};

export const searchBarSlice = createSlice({
  name: 'searchBar',
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setOption: (state, action) => {
      state.option = action.payload;
    },
  },
});

export const { setQuery, setOption } = searchBarSlice.actions;

export default searchBarSlice.reducer;
