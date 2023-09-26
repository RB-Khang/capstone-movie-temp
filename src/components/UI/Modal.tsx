import { Modal as ModalA, ModalProps as ModalPropsA } from 'antd'


type ModalObject = ModalPropsA
 


export const Modal = (props: ModalObject)  => {
    return <ModalA {...props}/>
}





