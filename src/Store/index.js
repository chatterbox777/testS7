import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authReducer from "./Slices/AuthSlice";
import usersReducer from "./Slices/UsersSlice";
import uiReducer from "./Slices/UISlice";
import errorsReducer from "./Slices/ErrorsSlice";

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

export default configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
    ui: uiReducer,
    errors: errorsReducer,
  },
  middleware: customizedMiddleware,
});
