
import { UseFormRegister } from 'react-hook-form'
import { HTMLInputTypeAttribute } from 'react'

type InputProps = {
    label?: string,
    className?: string,
    name?: string,
    id?: string,
    placeholder?: string,
    error?: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    register?: UseFormRegister<any>,
    type?: HTMLInputTypeAttribute,

}

const Input = ({ label, className, name, id, placeholder, type = "text", register, error }: InputProps) => {

    
    return (
        <div className={className}>
            {
                !!label && <label className="text-white" htmlFor={id}>{label}</label>
            }
            <input
                name={name}
                id={id}
                placeholder={placeholder}
                type={type}
                className="rounded bg-[#333] text-white w-full p-2 mt-2"
                {...register?.(name)}
            />
            {!!error && (<p className="text-red-500">{error} </p>)}
        </div>
    )
}

export default Input
