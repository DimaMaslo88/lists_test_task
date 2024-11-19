export type UserChildrenTreeActionsType=ReturnType<typeof setChildrenUserTree>
export const setChildrenUserTree =(params:{treeName:string,parentNodeId:number,nodeName:string})=>{
    return {
        type:"SET-CHILDREN-USER-TREE",
        payload:{
            params
        }
    }as const
}
