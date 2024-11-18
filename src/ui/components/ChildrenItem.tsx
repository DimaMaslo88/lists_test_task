import React, {useState} from 'react';
import {ChildrenTreeType} from "bll/reducers/userPostsReducer";
import {AddIcon} from "assets/icons/plus-file-svgrepo-com";
import style from 'styles/ChildrenItem.module.css'
import {EditIcon} from "assets/icons/pen-svgrepo-com";
import {DeleteIcon} from "assets/icons/delete-1-svgrepo-com";

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
            {item && <div>< AddIcon width={30}
                height={30}/>

                <EditIcon width={30}
                height={30}/>

                <DeleteIcon width={30}
                height={30}
                />
            </div>
            }

        </div>
    );
};

