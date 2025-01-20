import {StateType} from "bll/store";
import {UserChildrenType, UserTreeType} from "bll/reducers/userPostsReducer";

export const selectMainBranch=(state:StateType):UserChildrenType[]=>state.userTree.children
export const selectUserTreeName =(state:StateType):string=>state.userTree.nameParentTree
export const selectUserTreeId =(state:StateType):number | null=>state.userTree.parentId
export const selectIsOpenModal =(state:StateType):boolean=>state.modal.isOpenModal
export const selectIsOpenChildrenModal =(state:StateType):boolean=>state.modal.isOpenChildrenModal

