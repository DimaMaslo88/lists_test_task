import {UserTreeType} from "bll/reducers/userPostsReducer";

export type SetUserTreeType = ReturnType<typeof setUserTree>
export const setUserTree =(data:UserTreeType)=>{
    return {
        type:'SET-USER-TREE-TYPE',
        payload:{
            data
        }
    }as const
}
export type SetUserTreeNameType = ReturnType<typeof setUserTreeName>
export const setUserTreeName =(name:string)=>{
    return {
        type:'SET-USER-TREE-NAME-TYPE',
        payload:{
           name
        }
    }as const
}
