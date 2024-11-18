import React, {useState} from 'react';
import {ChildrenTreeType} from "bll/reducers/userPostsReducer";
import style from 'styles/ChildrenItem.module.css'
import s from 'styles/MainPage.module.css'
import {DeleteOutlined, EditTwoTone, PlusCircleTwoTone} from "@ant-design/icons";
import {useAppDispatch} from "hooks/hooks";
import {useSelector} from "react-redux";
import {selectIsOpenModal} from "bll/selectors/selectors";
import {setIsOpenModal} from "bll/actions/modalActions";

type ChildrenItemType = {
    id: number,
    title: string,
    childrenItem: ChildrenTreeType[]
}
export const ChildrenItem = ({id, title, childrenItem}: ChildrenItemType) => {
    const dispatch = useAppDispatch()
    const modalWindow = useSelector(selectIsOpenModal)
    const [item, setItem] = useState<boolean>(false)
    const onClickHandler = () => {
        setItem(!item)
    }
    const addNewItemHandler=()=>{
        dispatch(setIsOpenModal(true))
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
            </div>
        </div>
    );
};

