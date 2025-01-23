import React from 'react';
import {Modal} from "antd";

type DeleteModalWindowType={
    open: boolean
    onOk: () => void
    onCancel: () => void
    title:string
}
export const DeleteModalWindow = ({open,onCancel,onOk,title}:DeleteModalWindowType) => {
    return (

            <div>
                <Modal title="DELETE"
                       open={open}
                       onOk={()=>onOk()}
                       onCancel={onCancel}

                >
                   Do yo want to delete {title}
                </Modal>
            </div>
    );
};

