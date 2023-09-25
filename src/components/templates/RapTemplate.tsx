import { Badge, Tabs } from "components";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "store";
import {
    CumRapThunk,
    HeThongRapThunk,
    ThongTinLichChieuThunk,
} from "store/QuanLyRap/thunk";
import styled from "styled-components";
import { DanhSachPhim } from "types/HeThongRapType";

const RapTemplate = () => {
    const dispatch = useAppDispatch();
    const { heThongRap, cumRap, ThongTinLichChieu } = useSelector(
        (state: RootState) => state.QuanLyRap
    );
    const [mhtr, setmhtr] = useState<string>("BHDStar");
    const [danhSachPhimHienTai, setdanhSachPhimHienTai] = useState<
        DanhSachPhim[]
    >([]);
    console.log(danhSachPhimHienTai);
    

    const getListCumRap = () => {
        const listcumrap = ThongTinLichChieu.find(
            (item) => item.maHeThongRap === mhtr
        );
        return listcumrap;
    };
    const getCumRap = () => {
        const cumrap = cumRap?.map((cumrap, index) => {
            return {
                key: `${index}`,
                label: cumrap.tenCumRap,
                maCumRap: cumrap.maCumRap,
                children: (
                    <div>
                        {danhSachPhimHienTai?.map((item) => {
                            return (
                                <DivPhim className="m-3 p-3" key={item.maPhim}>
                                    <div className="w-3/12 align-middle">
                                        <Badge count={item.hot ? "Hot" : undefined}
                                        >
                                            <img src={item.hinhAnh} alt="" />
                                        </Badge>
                                    </div>
                                    <div className="w-9/12 p-2">
                                        <Badge
                                            count={item.dangChieu ? "Đang chiếu" : item.sapChieu ? "Sắp chiếu" : undefined} color={item.dangChieu ? "red" : item.sapChieu ? "yellow" : undefined}>
                                            <h1 className="text-xl font-semibold ms-2 my-2 italic drop-shadow-xl">
                                                {item.tenPhim}
                                            </h1>
                                        </Badge>

                                        <div className="grid grid-cols-4">
                                            {item.lstLichChieuTheoPhim.map((phim) => {
                                                return (
                                                    <ThongTinChieu key={phim.maLichChieu} className="text-center">
                                                        <p>{phim.ngayChieuGioChieu.slice(0, 10)}</p>
                                                        <p className="text-right me-3 font-bold">{phim.ngayChieuGioChieu.slice(11, 16)}</p>
                                                    </ThongTinChieu>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </DivPhim>
                            );
                        })}
                    </div>
                ),
            };
        });
        return cumrap;
    };
    const getHeThongRap = () => {
        const cumrap = getCumRap();
        const tabsObject = heThongRap?.map((item, index) => {
            return {
                key: `${index}`,
                label: <img src={item.logo} style={{ height: 50 }}></img>,
                children: (
                    <Tabs
                        tabPosition="left"
                        items={cumrap}
                        onChange={(activeKey) => {
                            const listCumRap = getListCumRap();
                            const CumRap = listCumRap.lstCumRap.find(
                                (itemfind) => itemfind.maCumRap == cumrap[activeKey].maCumRap
                            );
                            setdanhSachPhimHienTai(CumRap.danhSachPhim);
                        }}
                    ></Tabs>
                ),
                maheThongRap: item.maHeThongRap,
            };
        });
        return tabsObject;
    };
    const tabsObject = getHeThongRap();

    useEffect(() => {
        dispatch(HeThongRapThunk());
        dispatch(CumRapThunk("BHDStar"));
        dispatch(ThongTinLichChieuThunk());
    }, [dispatch]);
    return (
        <div>
            <h1 className="p-4 text-4xl font-bold text-center">HỆ THỐNG RẠP - LỊCH CHIẾU</h1>
            <HeThongRap>
                <Tabs
                    tabPosition="left"
                    items={tabsObject}
                    onChange={(activeKey) => {
                        dispatch(CumRapThunk(tabsObject[activeKey].maheThongRap));
                        setmhtr(tabsObject[activeKey].maheThongRap);
                    }}
                ></Tabs>
            </HeThongRap>
        </div>
    );
};
export default RapTemplate;
const HeThongRap = styled.div`
  height: 80vh;
  width: 80%;
  margin: auto;
  margin-top: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  overflow-y: scroll;
  &::-webkit-scrollbar-button{
    display: none;
  }
`;
const DivPhim = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  display: flex;
  img {
    border-radius: 4px;
    max-height: 220px;  
  }
`;
const ThongTinChieu = styled.div`
  border-radius: 8px;
  border: 1px solid #ccc;
  padding: 2px;
  margin-bottom: 8px;
  width: 100px;
  transition: 0.6s;
  &:hover{
    transform: scale(1.03);
  }
`;
