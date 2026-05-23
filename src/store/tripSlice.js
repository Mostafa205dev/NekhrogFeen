import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tripItems: [],
  budget: 800,
  time: 8,
  gang: 5,
  city: "cairo",
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
    setGang: (state, action) => {
      state.gang = action.payload;
    },
    setCity: (state, action) => {
      state.city = action.payload;
    },
  },
});

export const {
  addToTrip,
  removeFromTrip,
  setBudget,
  setTime,
  setGang,
  setCity,
} = tripSlice.actions;

export default tripSlice.reducer;
