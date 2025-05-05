import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const centerDetailsSlice = createSlice({
  name: "centerDetails",
  initialState,
  reducers: {
    setCenterDetails: (state, action) => {
      return action.payload;
    },
  },
});

const { setCenterDetails } = centerDetailsSlice.actions;

const centerDetailsReducer = centerDetailsSlice.reducer;

export { centerDetailsReducer, setCenterDetails };
