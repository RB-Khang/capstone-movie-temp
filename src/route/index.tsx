import { RouteObject } from 'react-router-dom'
import { AuthLayout } from 'components'
import Register from 'pages/Register'
import { PATH } from 'constant'
import Login from 'pages/Login'
import { MainLayout } from 'components'
import Home from 'pages/Home'
import Rap from 'pages/Rap'
import Booking from 'pages/Booking'
import { Detail } from 'pages/Detail'
// import PhimDangChieu from 'components/UI/PhimDangChieu'


export const router: RouteObject[] = [
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                index:true,
                element:<Home></Home>
            },
            {
                path:PATH.heThongRap,
                element:<Rap></Rap>
            },
            {
                path:PATH.booking,
                element:<Booking></Booking>
            },
            {
                path:PATH.detail,
                element:<Detail></Detail>
            }

        ]
    },
    {
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: PATH.login,
                element: <Login></Login>
            },
            {
                path: PATH.register,
                element: <Register></Register>
            }
        ]
    },
]