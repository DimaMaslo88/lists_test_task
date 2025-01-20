import React, {useEffect, useState} from 'react';
import {AddIcon} from "assets/icons/plus-file-svgrepo-com";
import style from "styles/MainPage.module.css"
import {useAppDispatch} from "hooks/hooks";
import {GetUserChildrenTree, GetUserTree, UserChildrenType, UserTreeType} from "bll/reducers/userPostsReducer";
import {ModalWindow} from "ui/modal/ModalWindow";
import {useSelector} from "react-redux";
import {selectIsOpenModal, selectMainBranch, selectUserTreeId, selectUserTreeName} from "bll/selectors/selectors";
import {ChildrenItem} from "ui/components/ChildrenItem";
import {setIsOpenModal} from "bll/actions/modalActions";



export const Main = () => {
    const dispatch = useAppDispatch()
    const mainBranch = useSelector(selectMainBranch)
    const isModalOpen = useSelector(selectIsOpenModal)
    const parentNodeId = useSelector(selectUserTreeId)
    const treeName = useSelector(selectUserTreeName)
    // const titleOfTree = useSelector(selectUserTreeName)
    useEffect(() => {
        debugger
        dispatch(GetUserTree('DimasProject'))
    }, [])
   // const [isModalOpen, setIsModalOpen] = useState(false)
    const onClickIconHandler = () => {
dispatch(setIsOpenModal(true))


    }
    const handleOkHandler = (nodeName: string) => {
        dispatch(GetUserChildrenTree({treeName,parentNodeId,nodeName}))
        dispatch(setIsOpenModal(false))
    }
    const handleCancelHandler = () => {
        dispatch(setIsOpenModal(false))
    }
    return (
        <div className={style.mainContainer}>
            <div className={style.itemBlock}>
            <h1>List of items</h1>
            <div className={style.icon}><AddIcon
                width={50}
                height={50}
                onClick={onClickIconHandler}
            /></div>
            </div>
            <div>
            {mainBranch.map(({id,name,children}:UserChildrenType)=>(

                <ul key={id}>
                <ChildrenItem parentNodeId ={id} treeName={name} childrenItem={children}/>
                </ul>
            ))}
            </div>
            {isModalOpen && <ModalWindow open={isModalOpen} onOk={handleOkHandler} onCancel={handleCancelHandler}/>}
        </div>
    );
};

// 1.Поменять логику main component
// (на функцию handleOkHandler повесить вызов санки GetUserChildrenTree,
// взять name parent,id parent и newName)
// 2.Если отработает все, удалить childrenModal

