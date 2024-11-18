import React, {useState} from 'react';
import {ChildrenTreeType} from "bll/reducers/userPostsReducer";
import {AddIcon} from "assets/icons/plus-file-svgrepo-com";
import style from 'styles/ChildrenItem.module.css'
import {EditIcon} from "assets/icons/pen-svgrepo-com";
import s from 'styles/MainPage.module.css'
import {DeleteOutlined} from "@ant-design/icons";

type ChildrenItemType = {
    id: number,
    title: string,
    childrenItem: ChildrenTreeType[]
}
export const ChildrenItem = ({id, title, childrenItem}: ChildrenItemType) => {
    const [item, setItem] = useState<boolean>(false)
    const onClickHandler = () => {
        setItem(!item)
    }
    return (
        <div className={style.itemContainer}>
            <h3 onClick={onClickHandler} role="presentation">{title}</h3>
            <div >
            {item && <div className={style.iconsBlock}>< AddIcon width={30}
                                    height={30}
            className={s.icon}
            />

                <EditIcon width={30}
                          height={30}
                          className={s.icon}
                />
               < DeleteOutlined className={s.deleteIcon}/>
            </div>
            }
            </div>
        </div>
    );
};

