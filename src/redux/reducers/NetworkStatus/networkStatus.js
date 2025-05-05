import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOnline:true
};

const NetworkStatusSlice = createSlice({
  name: "NetworkStatus",
  initialState,
  reducers: {
    setNetworkStatusDetails:  (state, action) => {
      state.isOnline = action.payload;
    },
    resetNetworkStatusDetails: (state, action) => {
      state.isOnline = true;
    },
  },
});

const networkStatusActions = NetworkStatusSlice.actions;

const networkStatusReducer = NetworkStatusSlice.reducer;

export { networkStatusReducer, networkStatusActions };