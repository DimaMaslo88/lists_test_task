export type SetIsOpenModalType = ReturnType<typeof setIsOpenModal>
export const setIsOpenModal =(isOpen:boolean)=>{
    return{
        type:'SET-IS-OPEN-MODAL',
        payload:{
            isOpen
        }
    }as const
}
export type SetIsOpenDeleteModalType = ReturnType<typeof setIsOpenDeleteModal>
export const setIsOpenDeleteModal =(isDeleteOpen:boolean)=>{
    return{
        type:'SET-IS-OPEN-DELETE-MODAL',
        payload:{
            isDeleteOpen
        }
    }as const
}
export type SetIsOpenEditModalType = ReturnType<typeof setIsOpenEditModal>
export const setIsOpenEditModal =(isEditOpen:boolean)=>{
    return{
        type:'SET-IS-OPEN-EDIT-MODAL',
        payload:{
            isEditOpen
        }
    }as const
}

