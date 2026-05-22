import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tripItems: [],
  budget: 0,
  time: 0,
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
        (_, index) => index !== action.payload,
      );
    },
    setBudget: (state, action) => {
      state.budget = action.payload;
    },
    setTime: (state, action) => {
      state.time = action.payload;
    },
  },
});

export const { addToTrip, removeFromTrip, setBudget, setTime } = tripSlice.actions;

export default tripSlice.reducer;
