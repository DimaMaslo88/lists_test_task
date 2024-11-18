export type SetIsOpenModalType = ReturnType<typeof setIsOpenModal>
export const setIsOpenModal =(isOpen:boolean)=>{
    return{
        type:'SET-IS-OPEN-MODAL',
        payload:{
            isOpen
        }
    }as const
}
