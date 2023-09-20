import { createAsyncThunk } from "@reduxjs/toolkit";
import { QuanLyRapServices } from "services/QuanLyRap";

export const HeThongRapThunk = createAsyncThunk(
  "QuanLyRap/hethongrap",
  async (_, { rejectWithValue }) => {
    try {
      const data = await QuanLyRapServices.heThongRap();
      return data.data.content;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
