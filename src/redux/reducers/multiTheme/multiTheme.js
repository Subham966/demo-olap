import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const multiThemeSlice = createSlice({
  name: "multiTheme",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      return action.payload;
    },
  },
});

const { setTheme } = multiThemeSlice.actions;

const multiThemeReducer = multiThemeSlice.reducer;

export { multiThemeReducer, setTheme };
