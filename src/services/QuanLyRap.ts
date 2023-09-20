import { apiInstance } from "constant/APIInstance";
import { HeThongRapType } from "types/HeThongRapType";
import ApiResponse from "types/type";

const api = apiInstance({
  baseURL: import.meta.env.VITE_QUAN_LY_RAP_API,
});

export const QuanLyRapServices = {
  heThongRap: () => api.get<ApiResponse<HeThongRapType[]>>("/LayThongTinHeThongRap"),
};
