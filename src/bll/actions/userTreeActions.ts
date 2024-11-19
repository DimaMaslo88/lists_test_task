import {ChildrenTreeType, UserTreeReducerType} from "bll/reducers/userPostsReducer";

export type SetUserTreeType = ReturnType<typeof setUserTree>
export const setUserTree =(data:ChildrenTreeType)=>{
    return {
        type:'SET-USER-TYPE',
        payload:{
            data
        }
    }as const
}
