import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Card } from "components";
import PhimTypeButton from "components/UI/PhimTypeButton";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { Autoplay } from "swiper/modules";
import { Button } from "antd";
import { generatePath, useNavigate } from "react-router-dom";
import { PATH } from "constant";
import { useState } from "react";
import { useQueryUrl } from "hooks";

const HomeTemplate = () => {
  const navigation = useNavigate();
  const { listPhim, bannerList } = useSelector(
    (state: RootState) => state.QuanLyPhim
  );
  const [inputValue, setInputValue] = useState();
  const [queryParams, setQueryParams] = useQueryUrl();
  // console.log("queryParams: ", queryParams);

  const movieSearch = listPhim.filter(
    (item) =>
      item.tenPhim.toLowerCase().includes(queryParams?.movieName?.toLowerCase())

    // optional chaining
  );

  return (
    <Container>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {bannerList?.map((item) => {
          return (
            <SwiperSlide key={item.maPhim}>
              <img
                src={item.hinhAnh}
                className="w-full"
                style={{
                  maxHeight: 750,
                }}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <Container_2>
        <PhimTypeButton></PhimTypeButton>
        <input
          value={inputValue || ""}
          type="text"
          className="input-search mr-4"
          placeholder="Tìm kiếm phim"
          onChange={(ev) => {
            setInputValue(ev.target.value);
          }}
        />
        <Button
          type="primary"
          danger
          className="!text-sm"
          onClick={() => {
            setQueryParams({
              movieName: inputValue || undefined,
            });
          }}
        >
          Search
        </Button>
        <div className="grid grid-cols-5 gap-5">
          {(queryParams?.movieName ? movieSearch : listPhim).map((item) => {
            return (
              <Card key={item.maPhim} className="card-item">
                <div className="img">
                  <img src={item.hinhAnh} alt="" />
                </div>
                <div className="phim-content flex justify-between">
                  <div>
                    <p className="font-bold">{item.tenPhim}</p>
                    <p className="italic">Rating: {item.danhGia}</p>
                  </div>
                  <div>
                    <Button
                      type="primary"
                      onClick={() => {
                        const path = generatePath(PATH.detail, {
                          movieID: item.maPhim,
                        });
                        console.log("path", path);
                        navigation(path);
                      }}
                    >
                      Detail
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </Container_2>
    </Container>
  );
};

export default HomeTemplate;

const Container = styled.div`
  width: 100vw;
  margin: auto;
  .card-item {
    .img {
      width: 100%;
      height: 300px;
      img {
        max-height: 300px;
        margin: auto;
      }
    }
    .phim-content {
      margin-top: 10px;
    }
    transition: 0.5s;
    &:hover {
      transform: scale(1.07);
    }
  }
`;

const Container_2 = styled.div`
  width: 80%;
  margin: auto;
`;
