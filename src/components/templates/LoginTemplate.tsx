import { zodResolver } from "@hookform/resolvers/zod"
import Input from "components/UI/Input"
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { LoginSchema, LoginSchemaType } from "schemas/LoginSchema"
import { useAppDispatch } from "store"
import { loginThunk } from "store/QuanLyNguoiDung/thunk"
import { handleError } from "utils"


const LoginTemplate = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm<LoginSchemaType>({
        mode: "onBlur",
        resolver: zodResolver(LoginSchema)
    })
    const onSubmit: SubmitHandler<LoginSchemaType> = (values) => {
        dispatch(loginThunk(values)).unwrap().then(() => {
            toast.success("Đăng nhập thành công")
            navigate('/')
        }).catch((err)=>{
            handleError(err)
        })

    }
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input
                id="taiKhoan"
                name="taiKhoan"
                placeholder="Nhập tài khoản"
                label="Tài Khoản"
                register={register}
                error={errors?.taiKhoan?.message}
            ></Input>
            <Input
                id="matKhau"
                name="matKhau"
                placeholder="Password"
                label="Mật Khẩu"
                type="password"
                register={register}
                error={errors?.matKhau?.message}
            ></Input>
            <button className="!w-full p-2 text-white bg-red-500 rounded mt-3" >Đăng nhập</button>
        </form>
    )

}

export default LoginTemplate
