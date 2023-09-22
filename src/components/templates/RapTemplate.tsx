import { Tabs } from "components"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { RootState, useAppDispatch } from "store"
import { CumRapThunk, HeThongRapThunk, ThongTinLichChieuThunk } from "store/QuanLyRap/thunk"
import styled from "styled-components"
import { DanhSachPhim } from "types/HeThongRapType"

const RapTemplate = () => {
    const dispatch = useAppDispatch()
    const { heThongRap, cumRap, ThongTinLichChieu } = useSelector((state: RootState) => state.QuanLyRap)
    const [mhtr, setmhtr] = useState<string>("BHDStar")
    const [danhSachPhimHienTai, setdanhSachPhimHienTai] = useState<DanhSachPhim[]>([])

    const getListCumRap = () => {
        const listcumrap = ThongTinLichChieu.find(item => item.maHeThongRap === mhtr)
        return listcumrap
    }
    const getCumRap = () => {
        const cumrap = cumRap?.map((cumrap, index) => {
            return {
                key: `${index}`,
                label: cumrap.tenCumRap,
                maCumRap: cumrap.maCumRap,
                children: <div>
                    {
                        danhSachPhimHienTai?.map((item) => {
                            return <DivPhim className="m-3 p-3" key={item.maPhim}>
                                <img src={item.hinhAnh} alt="" style={{height:130}}/>
                                <div>
                                    <h1 className="text-xl font-semibold ms-2">{item.tenPhim}</h1>
                                    <p></p>
                                </div>
                            </DivPhim>
                        })
                    }
                </div>
            }
        })
        return cumrap
    }
    const getHeThongRap = () => {
        const cumrap = getCumRap()
        const tabsObject = heThongRap?.map((item, index) => {
            return {
                key: `${index}`,
                label: <img src={item.logo} style={{ height: 50 }}></img>,
                children: <Tabs
                    tabPosition="left"
                    items={cumrap}
                    onChange={(activeKey) => {
                        const listCumRap = getListCumRap()
                        const CumRap = listCumRap.lstCumRap.find(itemfind => itemfind.maCumRap == cumrap[activeKey].maCumRap)
                        console.log(CumRap);                 
                        setdanhSachPhimHienTai(CumRap.danhSachPhim)
                    }}
                ></Tabs>,
                maheThongRap: item.maHeThongRap
            }
        }
        )
        return tabsObject
    }
    const tabsObject = getHeThongRap()

    useEffect(() => {
        dispatch(HeThongRapThunk())
        dispatch(CumRapThunk("BHDStar"))
        dispatch(ThongTinLichChieuThunk())
    }, [dispatch])
    return (
        <div>
            <HeThongRap>
                <h1 className="p-4 text-4xl font-bold text-center">CÁC HỆ THỐNG RẠP</h1>
                <Tabs tabPosition="left"
                    items={tabsObject}
                    onChange={(activeKey) => {
                        dispatch(CumRapThunk(tabsObject[activeKey].maheThongRap))
                        setmhtr(tabsObject[activeKey].maheThongRap)
                    }}></Tabs>
            </HeThongRap>
        </div>
    )
}
export default RapTemplate
const HeThongRap = styled.div`
height: 80vh;
    width: 80%;
    margin: auto;
    /* background-color: #e9e9e9;    */
    overflow: scroll;
`
const DivPhim = styled.div`
    border:1px solid #ccc;
    border-radius: 8px; 
    display: flex;
    img{
        border-radius: 8px;
    }
`