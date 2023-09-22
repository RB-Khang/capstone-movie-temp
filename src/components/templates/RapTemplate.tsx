import { Tabs } from "components"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { RootState, useAppDispatch } from "store"
import { CumRapThunk, HeThongRapThunk, ThongTinLichChieuThunk } from "store/QuanLyRap/thunk"
import styled from "styled-components"


const RapTemplate = () => {
    const dispatch = useAppDispatch()
    const { heThongRap, cumRap, ThongTinLichChieu } = useSelector((state: RootState) => state.QuanLyRap)
    console.log((ThongTinLichChieu));



    const getCumRap = () => {
        const cumrap = cumRap?.map((cumrap, index) => {
            return {
                key: `${index}`,
                label: cumrap.tenCumRap,
                tenCumRap: cumrap.tenCumRap,
                children: <Tabs tabPosition="left"
                ></Tabs>,
            }
        })
        return cumrap
    }
    const getHeThongRap = () => {
        const cumrap = getCumRap()
        const tabsObject = heThongRap?.map((item, index) => {
            return {
                key: `${index}`,
                label: item.tenHeThongRap.toUpperCase(),
                children: <Tabs
                    tabPosition="left"
                    items={cumrap}
                ></Tabs>,
                maheThongRap: item.maHeThongRap
            }
        })
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