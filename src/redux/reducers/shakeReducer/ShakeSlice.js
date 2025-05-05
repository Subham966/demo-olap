import { createSlice } from "@reduxjs/toolkit";

const shakeSlice = createSlice({
  name: "shake",
  initialState: {
    shake: false,
  },
  reducers: {
    setShake: (state, action) => {
      state.shake = action.payload;
    },
  },
});

const shakeActions = shakeSlice.actions;
const shakeReducer = shakeSlice.reducer;

export { shakeReducer, shakeActions };
