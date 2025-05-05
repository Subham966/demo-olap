import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  screenWidth:window.innerWidth,
  screenHeight:window.innerHeight
};

const screenSize = createSlice({
  name: "screenSize",
  initialState,
  reducers: {
    setScreenWidth: (state, action) => {
      state.screenWidth = action.payload;
    },
    setScreenHeight: (state, action) => {
      state.screenHeight = action.payload;
    }
  },
});

const screenSizeActions = screenSize.actions;

const screenSizeReducer = screenSize.reducer;

export { screenSizeReducer,screenSizeActions };
