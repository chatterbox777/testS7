import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, { payload }) => {
      state.isAuth = payload;
    },
    setUser: (state, { payload }) => {
      state.user = payload;
    },
  },
});
export const { setAuth, setUser } = authSlice.actions;

export default authSlice.reducer;
