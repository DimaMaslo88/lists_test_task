import React, { useState} from 'react';
import {DeleteUserNode, GetUserChildrenTree, UserChildrenType} from "bll/reducers/userPostsReducer";
import style from 'styles/ChildrenItem.module.css'
import s from 'styles/MainPage.module.css'
import {DeleteOutlined, EditTwoTone, PlusCircleTwoTone} from "@ant-design/icons";
import {useAppDispatch} from "hooks/hooks";
import {useSelector} from "react-redux";
import {selectIsOpenDeleteModal, selectIsOpenModal} from "bll/selectors/selectors";
import {ModalWindow} from "ui/modal/ModalWindow";
import {setIsOpenDeleteModal, setIsOpenModal} from "bll/actions/modalActions";
import {DeleteModalWindow} from "ui/modal/DeleteModalWindow";

type ChildrenItemType = {
    parentNodeId: number,
    treeName: string,
    childrenItemProp: UserChildrenType[]
}
export const ChildrenItem = ({treeName, parentNodeId, childrenItemProp}: ChildrenItemType) => {
    const dispatch = useAppDispatch()
    const modalWindow = useSelector(selectIsOpenModal)
const deleteModalWindow = useSelector(selectIsOpenDeleteModal)

    const [item, setItem] = useState<boolean>(false)
    const onClickHandler = () => {
        setItem(!item)
          }
    const addNewItemHandler = () => {

        dispatch(setIsOpenModal(true))

    }
    const deleteNewItemHandler=()=>{
        dispatch(setIsOpenDeleteModal(true))
    }
    const handleOkHandler = (nodeName:string) => {

         dispatch(GetUserChildrenTree({treeName, parentNodeId, nodeName}))
        dispatch(setIsOpenModal(false))
    }
    const deleteNodeHandler =()=>{

        dispatch(DeleteUserNode({treeName,parentNodeId}))
    }
    const deleteNodeCancelHandler=()=>{
        dispatch(setIsOpenDeleteModal(false))
    }

    const handleCancelHandler = () => {
        dispatch(setIsOpenModal(false))
    }
    return (
        <div className={style.itemContainer}>
            <h3 onClick={onClickHandler} role="presentation">{treeName}</h3>
            <div>
                {childrenItemProp && (
                    childrenItemProp.map(({id,name,children}:UserChildrenType)=>(
                        <ul key={id}>
                            <ChildrenItem parentNodeId ={id} treeName={name} childrenItemProp={children}/>
                        </ul>
                    ))
                )}
                {item && <div className={style.iconsBlock}>

                    <PlusCircleTwoTone className={s.icon} onClick={addNewItemHandler}/>
                    <EditTwoTone className={s.icon}/>
                    < DeleteOutlined className={s.deleteIcon} onClick={deleteNewItemHandler}/>
                </div>
                }
                 {modalWindow &&
                 <ModalWindow open={modalWindow} onOk={handleOkHandler} onCancel={handleCancelHandler}/>}
                {deleteModalWindow &&
                <DeleteModalWindow open={deleteModalWindow} onOk={deleteNodeHandler} onCancel={deleteNodeCancelHandler} title={treeName}/>
                }
            </div>
        </div>
    );
};

