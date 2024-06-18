import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import basketSlice from "./basketSlice";

export const store = configureStore({
  reducer: {
    authSlice,
    basketSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
