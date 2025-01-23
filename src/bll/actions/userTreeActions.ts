import {UserChildrenType} from "bll/reducers/userPostsReducer";

export type SetUserTreeType = ReturnType<typeof setUserTree>
export const setUserTree =(parentId:number,parentTitleTree:string)=>{
    return {
        type:'SET-USER-TREE-TYPE',
        payload:{
            parentId,
            parentTitleTree
        }
    }as const
}
export type SetChildrenTreeType = ReturnType<typeof setChildrenTree>
export const setChildrenTree =(data:UserChildrenType[])=>{
    return {
        type:'SET-CHILDREN-TREE-TYPE',
        payload:{
           data
        }
    }as const
}
export type DeleteUserNodeType=ReturnType<typeof deleteUserNode>
export const deleteUserNode = (nodeId:number)=>{
    return {
        type:'DELETE-USER-NODE',
        payload:{
            nodeId
        }
    }as const
}
