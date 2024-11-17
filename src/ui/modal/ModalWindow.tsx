import {Modal} from 'antd';
import React from 'react';

type ModalWindowType = {
    open: boolean
    onOk: () => void
    onCancel: () => void
}
export const ModalWindow = ({open, onCancel, onOk}: ModalWindowType) => {
    return (
        <div>
            <Modal title="Basic Modal"
                   open={open}
                   onOk={onOk}
                   onCancel={onCancel}

            >
                <input/>
            </Modal>
        </div>
    )
};

