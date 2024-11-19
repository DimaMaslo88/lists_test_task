import React, {useState} from 'react';
import {ChildrenTreeType, GetUserChildrenTree} from "bll/reducers/userPostsReducer";
import style from 'styles/ChildrenItem.module.css'
import s from 'styles/MainPage.module.css'
import {DeleteOutlined, EditTwoTone, PlusCircleTwoTone} from "@ant-design/icons";
import {useAppDispatch} from "hooks/hooks";
import {useSelector} from "react-redux";
import {selectIsOpenChildrenModal, selectIsOpenModal} from "bll/selectors/selectors";
import {setIsOpenChildrenModal, setIsOpenModal} from "bll/actions/modalActions";
import {ChildrenModalWindow} from "ui/modal/ChildrenModalWindow";

type ChildrenItemType = {
    id: number,
    title: string,
    childrenItem: ChildrenTreeType[]
}
export const ChildrenItem = ({title,id,childrenItem}: ChildrenItemType) => {
    const dispatch = useAppDispatch()
    const modalWindow = useSelector(selectIsOpenChildrenModal)

    const [item, setItem] = useState<boolean>(false)
    const onClickHandler = () => {
        setItem(!item)
    }
    const addNewItemHandler=()=>{
        dispatch(setIsOpenChildrenModal(true))

    }
    const handleOkHandler=(params:{id:number,title:string,childrenTitle:})=>{
        debugger
        dispatch(GetUserChildrenTree())
        dispatch(setIsOpenChildrenModal(false))
    }
    const handleCancelHandler = () => {
        dispatch(setIsOpenModal(false))
    }
    return (
        <div className={style.itemContainer}>
            <h3 onClick={onClickHandler} role="presentation">{title}</h3>
            <div>
                {item && <div className={style.iconsBlock}>

                    <PlusCircleTwoTone className={s.icon} onClick={addNewItemHandler} />
                    <EditTwoTone className={s.icon}/>
                    < DeleteOutlined className={s.deleteIcon}/>
                </div>
                }
                {modalWindow && <ChildrenModalWindow open={modalWindow} onOk={()=>handleOkHandler("hello")} onCancel={handleCancelHandler}/>}
            </div>
        </div>
    );
};

