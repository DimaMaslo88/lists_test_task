import {SetIsOpenModalType} from "bll/actions/modalActions";

export const modalReducerState={
    isOpenModal:false
}
export type ModalReducerType={
    isOpenModal:boolean
}

export type ModalReducerActionsType =SetIsOpenModalType
export const ModalReducer =(state:ModalReducerType=modalReducerState,action:ModalReducerActionsType):ModalReducerType=>{
    switch (action.type){
        case "SET-IS-OPEN-MODAL":{
            return {...state,isOpenModal:action.payload.isOpen}
        }
        default:return  state
    }
}
