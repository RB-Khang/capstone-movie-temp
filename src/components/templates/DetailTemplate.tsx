import { Button } from "antd";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "store";

export const DetailTemplate = () => {
  const params = useParams();

  const { listPhim } = useSelector((state: RootState) => state.QuanLyPhim);

  // detail movied
  const movieDetail = listPhim?.find(
    (e) => e.maPhim === Number(params.movieID)
  );
  console.log("movieDetail", movieDetail);

  return (
    <div className="container mx-auto px-4" key={movieDetail.maPhim}>
      <div className="flex mt-20">
        <div className="bg-auto">
          <img
            src={movieDetail.hinhAnh}
            className="max-h-[500px] max-w-xs mr-[30px] "
          />
        </div>
        <div className="mr-[500px] ">
          <h1 className="text-3xl font-bold">{movieDetail.tenPhim}</h1>
          <p className="font-medium text-xl my-[20px]">
            Khởi chiếu vào: {movieDetail.ngayKhoiChieu.slice(0, 10)}
          </p>
          <p className="font-medium text-xl my-[20px]">Thời lượng: 120 phút</p>
          <p className="font-medium text-xl my-[20px]">
            Ngôn ngữ: Tiếng Anh- Phụ đề Tiếng Việt{" "}
          </p>
          <p className="font-medium text-2xl my-[20px]">
            Nội Dung: {movieDetail.moTa}
          </p>
          <div className="flex">
            <Button type="primary" danger className="mr-5 !font-medium ">
              Xem Trailer
            </Button>
            <Button type="primary" danger className="!font-medium">
              Mua vé ngay
            </Button>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
