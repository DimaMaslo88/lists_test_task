import React from 'react';
import {Header} from "ui/components/Header";
import {Main} from "ui/components/Main";
import style from 'styles/app.module.css'

function App() {
    return (
        <div className={style.appContainer}>
            <Header/>
            <Main/>
        </div>
    );
}

export default App;
