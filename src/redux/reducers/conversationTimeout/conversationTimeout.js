import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

const initialState = {
  isTimerStarted: false,
  startTime: null, //value in milliseconds
  timeout: 6000000, // 10 minutes in milliseconds
  isConversationTerminated: false
};

const conversationTimeout = createSlice({
  name: "conversationTimeout",
  initialState,
  reducers: {
    setTimeoutTime(state, action) {
      state.timeout = action?.payload?.timeOut
        ?
         action?.payload?.timeOut * 60 * 1000
        : "6000000";
      (state.isTimerStarted = false), 
      (state.isConversationTerminated = false);
    },
    startTimer(state) {
      state.isTimerStarted = true;
      state.startTime = moment().valueOf();
      state.isConversationTerminated = false;
    },
    clearTimer(state) {
      state.isTimerStarted = false;
      state.startTime = null;
      state.isConversationTerminated = false;
    },
    setConversationTimeout(state) {
        state.isConversationTerminated = true;
        state.isTimerStarted = false;
    }
  },
});

const conversationTimeoutActions = conversationTimeout.actions;

const conversationTimeoutReducer = conversationTimeout.reducer;

export { conversationTimeoutReducer, conversationTimeoutActions };
