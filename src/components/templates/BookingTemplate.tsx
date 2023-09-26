import { useSelector } from "react-redux";
import { RootState } from "store";
import styled from "styled-components";

const BookingTemplate = () => {
  const {  thongTinPhimRap, danhSachGhe } = useSelector(
    (state: RootState) => state.DanhSachPhongVe
  );
  console.log("danhSachGhe", danhSachGhe);

  return (
    <Container>
      <div className="w-6/12 booking-map">
        {thongTinPhimRap?.map((phim) => {
         console.log('phim', phim.hinhAnh);
         
          return (
            <img src={phim.hinhAnh} alt="" />
            
          );
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
