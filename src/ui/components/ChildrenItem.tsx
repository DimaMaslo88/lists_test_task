import React, {useState} from 'react';
import {GetUserChildrenTree, UserTreeType} from "bll/reducers/userPostsReducer";
import style from 'styles/ChildrenItem.module.css'
import s from 'styles/MainPage.module.css'
import {DeleteOutlined, EditTwoTone, PlusCircleTwoTone} from "@ant-design/icons";
import {useAppDispatch} from "hooks/hooks";
import {useSelector} from "react-redux";
import {selectIsOpenChildrenModal, selectIsOpenModal} from "bll/selectors/selectors";
import {setIsOpenChildrenModal, setIsOpenModal} from "bll/actions/modalActions";
import {ChildrenModalWindow} from "ui/modal/ChildrenModalWindow";
import axios from "axios";
import {ModalWindow} from "ui/modal/ModalWindow";

type ChildrenItemType = {
    parentNodeId: number,
    treeName: string,
    childrenItem: UserTreeType[]
}
export const ChildrenItem = ({treeName, parentNodeId, childrenItem}: ChildrenItemType) => {
    const dispatch = useAppDispatch()
    const modalWindow = useSelector(selectIsOpenChildrenModal)

    const nodeName = "zzz" // hardcode nodeName
    const [item, setItem] = useState<boolean>(false)
    const onClickHandler = () => {
        setItem(!item)
    }
    const addNewItemHandler = () => {
        dispatch(setIsOpenChildrenModal(true))

    }
    const handleOkHandler = () => {

        // dispatch(GetUserChildrenTree({treeName, parentNodeId, nodeName}))
        dispatch(setIsOpenChildrenModal(false))
    }
    // const createNode = async () => {
    //     try {
    //         const response = await axios.post('https://test.vmarmysh.com/api.user.tree.node.create', null, {
    //             params: {
    //                 treeName,
    //                 parentNodeId,
    //                 nodeName
    //             }
    //         });
    //
    //         console.log('Node created successfully:', response.data);
    //     } catch (error) {
    //         console.error('Error creating node:');
    //     }
    // };
    const handleCancelHandler = () => {
        dispatch(setIsOpenChildrenModal(false))
    }
    return (
        <div className={style.itemContainer}>
            <h3 onClick={onClickHandler} role="presentation">{treeName}</h3>
            <div>
                {item && <div className={style.iconsBlock}>

                    <PlusCircleTwoTone className={s.icon} onClick={addNewItemHandler}/>
                    <EditTwoTone className={s.icon}/>
                    < DeleteOutlined className={s.deleteIcon}/>
                </div>
                }
                 {modalWindow &&
                 <ModalWindow open={modalWindow} onOk={handleOkHandler} onCancel={handleCancelHandler}/>}
            </div>
        </div>
    );
};

