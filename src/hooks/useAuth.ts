import { useSelector } from "react-redux";
import { RootState } from "store";

export const useAuth = () => {
  const { userLogin, accessToken } = useSelector(
    (state: RootState) => state.QuanLyNguoiDung
  );
  return {
    userLogin,
    accessToken,
  };
};
