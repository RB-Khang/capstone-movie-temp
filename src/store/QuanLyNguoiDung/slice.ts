import { createSlice } from "@reduxjs/toolkit";
import { UserLogin, getUserLoginType } from "types/UserLoginType";
import { checkLoginThunk, loginThunk } from "./thunk";
import { getAccessToken } from "utils";
type StateType = {
  accessToken?: string;
  userLogin?: UserLogin | getUserLoginType;
};
const initialState: StateType = {
  accessToken: getAccessToken(),
};

const slice = createSlice({
  name: "QuanLyNguoiDung",
  initialState,
  reducers: {
    logOut: (state) => {
      state.accessToken = undefined;
      state.userLogin = undefined;
      localStorage.removeItem("ACCESSTOKEN");
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        localStorage.setItem("ACCESSTOKEN", payload.accessToken);
        state.userLogin = payload;
        state.accessToken = payload.accessToken;
      })
      .addCase(checkLoginThunk.fulfilled, (state, { payload }) => {
        state.userLogin = payload;
      });
  },
});

export const {
  reducer: QuanLyNguoiDungReducers,
  actions: QuanLyNguoiDungActions,
} = slice;
