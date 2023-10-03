import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAccessToken(state, action) {
      state.accessToken = action.payload;
    },
    removeAccessToken(state) {
      state.accessToken = "";
    },
  },
});
