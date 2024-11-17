import React, {useEffect, useState} from 'react';
import {AddIcon} from "assets/icons/plus-file-svgrepo-com";
import style from "styles/MainPage.module.css"
import {useAppDispatch} from "hooks/hooks";
import {GetUserTree} from "bll/reducers/userPostsReducer";
import {ModalWindow} from "ui/modal/ModalWindow";


export const Main = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(GetUserTree("Hello"))
    }, [])
    const [isModalOpen, setIsModalOpen] = useState(false)
    const onClickIconHandler = () => {
        debugger
        setIsModalOpen(true)
    }
    const handleOkHandler =()=>{
        setIsModalOpen(false)
    }
    const handleCancelHandler=()=>{
        setIsModalOpen(false)
    }
    return (
        <div className={style.mainContainer}>
            <h1>List of items</h1>
            <div className={style.icon}><AddIcon
                width={50}
                height={50}
                onClick={onClickIconHandler}
            /></div>
            {isModalOpen && <ModalWindow open={isModalOpen} onOk={handleOkHandler} onCancel={handleCancelHandler}/>}
        </div>
    );
};

