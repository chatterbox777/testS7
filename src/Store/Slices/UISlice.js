import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isRequestInProcess: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setStartRequest: (state) => {
      state.isRequestInProcess = true;
    },
    setStopRequest: (state) => {
      state.isRequestInProcess = false;
    },
  },
});
export const { setStartRequest, setStopRequest } = uiSlice.actions;

export default uiSlice.reducer;
