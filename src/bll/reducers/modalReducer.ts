import {SetIsOpenDeleteModalType, SetIsOpenEditModalType, SetIsOpenModalType} from "bll/actions/modalActions";

export const modalReducerState={
    isOpenModal:false,
    isOpenDeleteModal:false,
    isOpenEditModal:false


}
export type ModalReducerType={
    isOpenModal:boolean,
    isOpenDeleteModal:boolean,
    isOpenEditModal:boolean
}

export type ModalReducerActionsType =SetIsOpenModalType
|SetIsOpenDeleteModalType
|SetIsOpenEditModalType

export const ModalReducer =(state:ModalReducerType=modalReducerState,action:ModalReducerActionsType):ModalReducerType=>{
    switch (action.type){
        case "SET-IS-OPEN-MODAL":{
            return {...state,isOpenModal:action.payload.isOpen}
        }
        case "SET-IS-OPEN-DELETE-MODAL":{
            return {...state,isOpenDeleteModal:action.payload.isDeleteOpen}
        }
        case "SET-IS-OPEN-EDIT-MODAL":{
            return {...state,isOpenEditModal:action.payload.isEditOpen}
        }

        default:return  state
    }
}
