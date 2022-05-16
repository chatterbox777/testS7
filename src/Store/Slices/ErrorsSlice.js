import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  errors: [],
};

export const errorsSlice = createSlice({
  name: "errors",
  initialState,
  reducers: {
    setErrors: (state, { payload: error }) => {
      state.errors.push({
        message: error.message,
        description: error.response.data.error,
      });
    },
    clearErrors: (state, { payload: index }) => {
      state.errors = state.errors.filter((error, i) => {
        return i !== index;
      });
    },
  },
});
export const { setErrors, clearErrors } = errorsSlice.actions;

export default errorsSlice.reducer;
