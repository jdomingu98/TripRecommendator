import { createSlice } from '@reduxjs/toolkit';

const tripSlice = createSlice({
  name: 'trip',
  initialState: {
    location: '',
    destinations: [],
  },
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setDestinations: (state, action) => {
      state.destinations = action.payload;
    },
  },
});

export const { setLocation, setDestinations } = tripSlice.actions;

export default tripSlice.reducer;
