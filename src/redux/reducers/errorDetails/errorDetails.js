import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  networkErrorCount: 0,
  applicationErrorCount: 0,
  timeoutErrorCount: 0,
  showNetworkErrorPopup: false,
  showApplicationErrorPopup: false,
  showTimeoutErrorPopup: false
};

const errorDetails = createSlice({
  name: "errorDetails",
  initialState,
  reducers: {
    setNetworkErrorCount: (state, action) => {
      state.networkErrorCount = state.networkErrorCount + 1;
      state.showNetworkErrorPopup = state.networkErrorCount > 3 ? true : false;
    },
    resetNetworkErrorCount: (state, action) => {
      state.networkErrorCount = 0;
      state.showNetworkErrorPopup = false;
    },
    setApplicationErrorCount: (state, action) => {
      state.applicationErrorCount = state.applicationErrorCount + 1;
      state.showApplicationErrorPopup = true;
    },
    resetApplicationErrorCount: (state, action) => {
      state.applicationErrorCount = 0;
      state.showApplicationErrorPopup = false;
    },
    setTimeoutErrorCount: (state, action) => {
      state.timeoutErrorCount = state.timeoutErrorCount + 1;
      state.showTimeoutErrorPopup = state.timeoutErrorCount > 1 ? true : false;
    },
    resetTimeoutErrorCount: (state, action) => {
      state.timeoutErrorCount = 0;
      state.showTimeoutErrorPopup = false;
    },
    resetNetworkErrorState: () => {
      return { ...initialState };
    }

  }
});

const errorDetailsActions = errorDetails.actions;

const errorDetailsReducer = errorDetails.reducer;

export { errorDetailsReducer, errorDetailsActions };
