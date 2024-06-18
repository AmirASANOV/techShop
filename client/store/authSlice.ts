"use client";
import { createSlice } from "@reduxjs/toolkit";

interface IAuth {
  token: string | null;
  isAuth: boolean;
}

let token = null;

if (typeof window !== "undefined") {
  const tokenStorage = localStorage.getItem("token");
  token = tokenStorage;
}

const initialState: IAuth = {
  token: token || null,
  isAuth: !!token,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
      state.isAuth = true;
    },

    clearToken(state) {
      state.token = null;
      localStorage.removeItem("token");
      state.isAuth = false;
    },
  },
});

export const { setToken, clearToken } = authSlice.actions;
export default authSlice.reducer;
