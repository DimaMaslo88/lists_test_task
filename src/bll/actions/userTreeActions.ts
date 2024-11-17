import {UserTreeReducerType} from "bll/reducers/userPostsReducer";

export type SetUserTreeType = ReturnType<typeof setUserTree>
export const setUserTree =(data:UserTreeReducerType[])=>{
    return {
        type:'SET-USER-TYPE',
        payload:{
            data
        }
    }as const
}
