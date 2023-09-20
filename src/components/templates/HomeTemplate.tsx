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




const HomeTemplate = () => {
    const { listPhim, bannerList } = useSelector((state: RootState) => state.QuanLyPhim)

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
                {
                    bannerList?.map((item) => {
                        return <SwiperSlide key={item.maPhim}><img src={item.hinhAnh} className="w-full" style={{
                            maxHeight: 750
                        }} /></SwiperSlide>
                    })
                }
            </Swiper>

            <Container_2>
                <PhimTypeButton></PhimTypeButton>
                <div className="grid grid-cols-5 gap-5">
                    {
                        listPhim?.map((item) => {
                            return <Card key={item.maPhim} className="card-item">
                                <div className="img">
                                    <img src={item.hinhAnh} alt="" />
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

        </Container>
    )
}

export default HomeTemplate

const Container = styled.div`
  width: 100vw;
  margin: auto;
  .card-item{
    .img{
      width: 100%;
      height: 300px;
      img{
        max-height: 300px;
        margin: auto;
      }
    }
    .phim-content{
      margin-top: 10px;
    }
    transition: 0.5s;
    &:hover{
      transform: scale(1.07);
    }
  }
`

const Container_2 = styled.div`
    width: 80%;
    margin:auto
`
