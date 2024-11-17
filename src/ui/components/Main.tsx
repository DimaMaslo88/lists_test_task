import React, {useState} from 'react';
import {AddIcon} from "assets/icons/plus-file-svgrepo-com";
import style from "styles/MainPage.module.css"

export const Main = () => {
    const [openModal,setOpenModal] = useState()
    return (
        <div className={style.mainContainer}>
            <h1 >List of items</h1>
            <div><AddIcon
                width={50}
                height={50}
            /></div>
        </div>
    );
};

