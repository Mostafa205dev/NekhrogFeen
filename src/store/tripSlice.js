import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tripItems: [],
};

const tripSlice = createSlice({
  name: "trip",
  initialState,

  reducers: {
    addToTrip: (state, action) => {
      state.tripItems.push(action.payload);
    },

    removeFromTrip: (state, action) => {
      state.tripItems = state.tripItems.filter(
        (_, index) => index !== action.payload
      );
    },
  },
});

export const { addToTrip, removeFromTrip } = tripSlice.actions;

export default tripSlice.reducer;