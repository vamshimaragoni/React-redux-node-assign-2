// reducers/dataSlice.js
import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    loading: false,
    data: null,
    error: null,
  },
  reducers: {
    fetchDataRequest: (state) => {
      state.loading = true;
    },
    fetchDataSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    fetchDataFailure: (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  fetchDataRequest,
  fetchDataSuccess,
  fetchDataFailure,
} = dataSlice.actions;

export default dataSlice.reducer;
