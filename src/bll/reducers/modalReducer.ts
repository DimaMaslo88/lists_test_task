import {SetIsOpenChildrenModalType, SetIsOpenModalType} from "bll/actions/modalActions";

export const modalReducerState={
    isOpenModal:false,
    isOpenChildrenModal:false
}
export type ModalReducerType={
    isOpenModal:boolean
    isOpenChildrenModal:boolean
}

export type ModalReducerActionsType =SetIsOpenModalType
|SetIsOpenChildrenModalType
export const ModalReducer =(state:ModalReducerType=modalReducerState,action:ModalReducerActionsType):ModalReducerType=>{
    switch (action.type){
        case "SET-IS-OPEN-MODAL":{
            return {...state,isOpenModal:action.payload.isOpen}
        }
        case "SET-IS-OPEN-CHILDREN-MODAL":{
            return {...state,isOpenChildrenModal:action.payload.isOpen}
        }
        default:return  state
    }
}
