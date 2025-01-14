import React, {useEffect} from 'react';
import style from 'styles/Header.module.css'
import {UniversalButton} from "ui/components/universal/button/button";

export const Header = () => {

    return (
        <div className={style.headerContainer}>
            <div><UniversalButton/></div>
         <img src='https://static.tildacdn.com/tild3739-3265-4062-a331-393062643266/IT.png'
              alt='logo'
         width='100px'
         />

        </div>
    );
};

