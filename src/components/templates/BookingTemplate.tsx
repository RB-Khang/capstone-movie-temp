import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "store";
import styled from "styled-components";

const BookingTemplate = () => {
  // hình dung life cycle của trangw
  const params = useParams();
  //kiếm được mã lịch chiếu -> /thong-tin-chieu/:lichchieu -> useParam -> trả về object {lichchieu : }
  const { thongTinPhimRap } = useSelector(
    (state: RootState) => state.DanhSachPhongVe
  );
  // log lúc chưa tạo state
  //render lại để tạo state
  //useEffect (mã lịch chiếu => dispathc thunk ( mã lịch chiếu ) -> gọi api  -> reducer builder -> ghi lên state của store  dependencies: dispatch )
  const lichChieu = thongTinPhimRap?.find(
    (e) => e.maLichChieu === Number(params.movieID)
  );
  console.log("lichChieu", lichChieu);

  return (
    <Container>
      <div className="w-6/12 booking-map">
        {thongTinPhimRap?.map((phim) => {
          console.log("phim", phim);
          //tách components
          return <div className="font-medium text-2xl"></div>;
        })}
      </div>
      <div className="w-6/12 film-info"></div>
    </Container>
  );
};

export default BookingTemplate;
const Container = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
`;
