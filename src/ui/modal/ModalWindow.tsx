import {Modal} from 'antd';
import React, {ChangeEvent, useState} from 'react';

type ModalWindowType = {
    open: boolean
    onOk: (title:string) => void
    onCancel: () => void
}
export const ModalWindow = ({open, onCancel, onOk}: ModalWindowType) => {
    const [itemName,setItemName]=useState('')
    const onChangeInputHandler =(e:ChangeEvent<HTMLInputElement>)=>{
     setItemName(e.currentTarget.value)
    }
    return (
        <div>
            <Modal title="Add Your Title"
                   open={open}
                   onOk={()=>onOk(itemName)}
                   onCancel={onCancel}

            >
                <input value={itemName} onChange={onChangeInputHandler}/>
            </Modal>
        </div>
    )
};

