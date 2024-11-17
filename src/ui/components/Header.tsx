import React, {useEffect} from 'react';
import style from 'styles/Header.module.css'
import {useAppDispatch} from "hooks/hooks";
import {GetUserTree} from "bll/reducers/userPostsReducer";

export const Header = () => {
    const dispatch  = useAppDispatch()
    useEffect(()=>{
        dispatch(GetUserTree("Hello"))
    },[])
    return (
        <div className={style.headerContainer}>
            <div>back</div>
          logo
        </div>
    );
};

