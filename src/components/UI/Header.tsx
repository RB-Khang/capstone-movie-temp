import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "hooks";
import { getAccessToken } from "utils";
import { PATH } from "constant";
import { useAppDispatch } from "store";
import { QuanLyNguoiDungActions } from "store/QuanLyNguoiDung/slice";
import { toast } from "react-toastify";

const Header = () => {
  const dispatch = useAppDispatch();
  const { userLogin } = useAuth();
  const navigate = useNavigate();
  const accessToken = getAccessToken();
  return (
    <div>
      <Container>
        <div className="header-content">
          <h1 className="ps-5">
            CYBER<span className="text-red-500">MOVIE</span>
          </h1>
          <div className="nav">
            <NavLink to="/" className="nav-link">
              THÔNG TIN
            </NavLink>
            <NavLink to="/" className="nav-link">
              PHIM
            </NavLink>
            <NavLink to={PATH.heThongRap} className="nav-link">
              RẠP
            </NavLink>
            <NavLink to={PATH.booking} className="nav-link">
              ĐẶT VÉ
            </NavLink>
          </div>
          <div className="header-search">
            <input
              type="text"
              className="input-search"
              placeholder="Tìm kiếm phim"
            />
          </div>
        </div>
        <div className="auth">
          {!accessToken && (
            <p>
              <span className="span-hover" onClick={() => navigate(PATH.login)}>
                Đăng nhập
              </span>
              <span> | </span>
              <span
                className="span-hover"
                onClick={() => navigate(PATH.register)}
              >
                Đăng ký
              </span>
            </p>
          )}
          {!!accessToken && (
            <p>
              <span
                style={{
                  fontWeight: 500,
                }}
              >
                {userLogin.hoTen}
              </span>
              <span> | </span>
              <span
                className="span-hover"
                onClick={() => {
                  const isLogout = confirm("Bạn có chắc muốn đăng xuất?");
                  if (isLogout) {
                    dispatch(QuanLyNguoiDungActions.logOut());
                    toast.success("Đăng xuất thành công");
                  }
                }}
              >
                Đăng xuất
              </span>
            </p>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Header;

const Container = styled.div`
  position: sticky;
  border-radius: 8px;
  height: 70px;
  padding: 15px 0;
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  .header-content {
    height: 100%;
    width: 80%; 
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      font-weight: 900;
      font-style: italic;
      font-size: 35px;
    }
    .nav {
      vertical-align: middle;
      .nav-link {
        font-weight: 300;
        display: inline-block;
        border-radius: 10px;
        height: 100%;
        padding: 6px 1rem;
        transition: 0.5s;
        margin: 0 2px;
        &:hover {
          background-color: #ccc;
        }
      }
    }
    .input-search {
      width: 200px;
      padding: 6px;
      border-radius: 5px;
      border: 1px solid #ccc;
      outline: none;
    }
  }
  .auth {
    width: 17%;
    display: flex;
    line-height: 100%;
    align-items: center;
    font-weight: 300;

    .span-hover {
      transition: 0.3s;
      border-radius: 10px;
      padding: 6px 12px;

      &:hover {
        background-color: #ccc;
        text-shadow: 2px 2px 8px #ccc;
      }
    }
  }
`;
