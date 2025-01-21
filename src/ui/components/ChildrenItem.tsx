import React, {useState} from 'react';
import {GetUserChildrenTree, UserChildrenType} from "bll/reducers/userPostsReducer";
import style from 'styles/ChildrenItem.module.css'
import s from 'styles/MainPage.module.css'
import {DeleteOutlined, EditTwoTone, PlusCircleTwoTone} from "@ant-design/icons";
import {useAppDispatch} from "hooks/hooks";
import {useSelector} from "react-redux";
import {selectIsOpenChildrenModal} from "bll/selectors/selectors";
import {setIsOpenChildrenModal} from "bll/actions/modalActions";
import {ModalWindow} from "ui/modal/ModalWindow";

type ChildrenItemType = {
    parentNodeId: number,
    treeName: string,
    childrenItemProp: UserChildrenType[]
}
export const ChildrenItem = ({treeName, parentNodeId, childrenItemProp}: ChildrenItemType) => {
    const dispatch = useAppDispatch()
    const modalWindow = useSelector(selectIsOpenChildrenModal)


    const [item, setItem] = useState<boolean>(false)
    const onClickHandler = () => {
        setItem(!item)
    }
    const addNewItemHandler = () => {

        dispatch(setIsOpenChildrenModal(true))

    }
    const handleOkHandler = (nodeName:string) => {
debugger
         dispatch(GetUserChildrenTree({treeName, parentNodeId, nodeName}))
        dispatch(setIsOpenChildrenModal(false))
    }

    const handleCancelHandler = () => {
        dispatch(setIsOpenChildrenModal(false))
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
                    < DeleteOutlined className={s.deleteIcon}/>
                </div>
                }
                 {modalWindow &&
                 <ModalWindow open={modalWindow} onOk={handleOkHandler} onCancel={handleCancelHandler}/>}
            </div>
        </div>
    );
};

