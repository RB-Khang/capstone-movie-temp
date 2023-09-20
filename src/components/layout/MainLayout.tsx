import Header from "components/UI/Header"
import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import { useAppDispatch } from "store"
import { BannerThunk, DanhSachPhimThunk } from "store/QuanLyPhim/thunk"
import styled from "styled-components"


export const MainLayout = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(BannerThunk())
    dispatch(DanhSachPhimThunk(''))
  }, [dispatch])


  return (
    <div>
      <Header></Header>
      <MainWrapper id="main-content">
        <Outlet></Outlet>
      </MainWrapper>
    </div>
  )
}



const MainWrapper = styled.div`
  //
`