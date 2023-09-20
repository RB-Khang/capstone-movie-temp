import { useEffect } from "react"
import { useSelector } from "react-redux"
import { RootState, useAppDispatch } from "store"
import { HeThongRapThunk } from "store/QuanLyRap/thunk"
import styled from "styled-components"


const RapTemplate = () => {
    const dispatch = useAppDispatch()
    const { heThongRap } = useSelector((state: RootState) => state.QuanLyRap)
    console.log(heThongRap);

    useEffect(() => {
        dispatch(HeThongRapThunk())
    }, [dispatch])
    return (
        <div>
            <HeThongRap>
                <h1 className="p-4 text-4xl font-bold text-center">CÁC HỆ THỐNG RẠP</h1>
                {
                    heThongRap?.map(item => {
                        return <p className="ps-3" key={item.maHeThongRap}>{item.tenHeThongRap}</p>
                    })
                }
            </HeThongRap>
        </div>
    )
}

export default RapTemplate


const HeThongRap = styled.div`
height: 400px;
    width: 50%;
    margin: auto;
    background-color: #ccc;
    
`