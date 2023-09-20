import { createSlice } from "@reduxjs/toolkit";
import { HeThongRapType } from "types/HeThongRapType";
import { HeThongRapThunk } from "./thunk";

type StateType = {
  heThongRap?: HeThongRapType[];
};

const initialState: StateType = {

};

const QuanLyRapSlice = createSlice({
  name: "QuanLyRap",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(HeThongRapThunk.fulfilled, (state,{payload}) => {
      state.heThongRap = payload
    });
  },
});

export const { reducer: QuanLyRapReducer, actions: QuanLyRapActions } =
  QuanLyRapSlice;
