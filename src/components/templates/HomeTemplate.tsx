<<<<<<< HEAD
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Card } from "components/UI/Card"
import PhimTypeButton from "components/UI/PhimTypeButton"
import styled from "styled-components"
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { Autoplay } from 'swiper/modules';
// import { generatePath, useNavigate } from 'react-router-dom';
// import { PATH } from 'constant';

=======
/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
>>>>>>> 94ca4ae09e511f184c4a76026abc16105ea4f27f

import { Card } from "components";
import PhimTypeButton from "components/UI/PhimTypeButton";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { Autoplay } from "swiper/modules";
import { Button } from "antd";
import { generatePath, useNavigate } from "react-router-dom";
import { PATH } from "constant";

import { useQueryUrl } from "hooks";

const HomeTemplate = () => {
<<<<<<< HEAD
    const { listPhim, bannerList } = useSelector((state: RootState) => state.QuanLyPhim)
    // const navigate = useNavigate()
=======
  const navigation = useNavigate();
  const { listPhim, bannerList } = useSelector(
    (state: RootState) => state.QuanLyPhim
  );
>>>>>>> 94ca4ae09e511f184c4a76026abc16105ea4f27f

  const [queryParams] = useQueryUrl();

  const movieSearch = listPhim?.filter((item) =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    item.tenPhim
      .toLowerCase()
      .includes((queryParams as any)?.movieName?.toLowerCase())
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

<<<<<<< HEAD
            <Container_2>
                <PhimTypeButton></PhimTypeButton>
                <div className="grid grid-cols-5 gap-5">
                    {
                        listPhim?.map((item) => {
                            console.log(item.maPhim);

                            return <Card key={item.maPhim} className="card-item">
                                <div className="img">
                                    <img src={item.hinhAnh} alt="" onClick={() => {
                                        // const path = generatePath(PATH.detailPhim,{movieId:${item.maPhim}})

                                    }} />
                                </div>
                                <div className="phim-content">
                                    <p className="font-bold">{item.tenPhim}</p>
                                    <p className="italic">Rating: {item.danhGia}</p>
                                </div>
                            </Card>
                        })
                    }
                </div>
            </Container_2>
=======
      <Container_2>
        <PhimTypeButton></PhimTypeButton>
>>>>>>> 94ca4ae09e511f184c4a76026abc16105ea4f27f

        <div className="grid grid-cols-5 gap-5">
          {((queryParams as any)?.movieName ? movieSearch : listPhim)?.map(
            (item) => {
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
            }
          )}
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
