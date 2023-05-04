import { createSlice } from '@reduxjs/toolkit';

const initialStateFilters = { filter: '' };

const filtersSlice = createSlice({
  name: 'filters',
  initialState: initialStateFilters,
  reducers: {
    setFilter: {
      reducer(state, action) {
        state.filter = action.payload;
      },
    },
  },
});

export const { setFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;