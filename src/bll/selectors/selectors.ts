import {StateType} from "bll/store";
import {UserTreeReducerType} from "bll/reducers/userPostsReducer";

export const selectMainBranch=(state:StateType):UserTreeReducerType[]=>state.userTree
export const selectIsOpenModal =(state:StateType):boolean=>state.modal.isOpenModal

