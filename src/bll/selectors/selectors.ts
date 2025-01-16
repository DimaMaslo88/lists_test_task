import {StateType} from "bll/store";
import {UserTreeReducerType} from "bll/reducers/userPostsReducer";

export const selectMainBranch=(state:StateType):UserTreeReducerType[]=>state.userTree.children
export const selectUserTreeName =(state:StateType):string=>state.userTree.name
export const selectIsOpenModal =(state:StateType):boolean=>state.modal.isOpenModal
export const selectIsOpenChildrenModal =(state:StateType):boolean=>state.modal.isOpenChildrenModal

