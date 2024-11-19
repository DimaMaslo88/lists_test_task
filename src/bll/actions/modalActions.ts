export type SetIsOpenModalType = ReturnType<typeof setIsOpenModal>
export const setIsOpenModal =(isOpen:boolean)=>{
    return{
        type:'SET-IS-OPEN-MODAL',
        payload:{
            isOpen
        }
    }as const
}
export type SetIsOpenChildrenModalType = ReturnType<typeof setIsOpenChildrenModal>
export const setIsOpenChildrenModal =(isOpen:boolean)=>{
    return{
        type:'SET-IS-OPEN-CHILDREN-MODAL',
        payload:{
            isOpen
        }
    }as const
}
