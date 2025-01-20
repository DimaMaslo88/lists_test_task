import {
    setChildrenTree,
    SetChildrenTreeType,
    setUserTree,
    SetUserTreeType
} from "bll/actions/userTreeActions";
import {AppThunkType, StateType} from "bll/store";
import {UserTreeApi} from "dal/api/userTree-api/userTree-api";
import {setChildrenUserTree, UserChildrenTreeActionsType} from "bll/actions/userChildrenTreeActions";

export const userTreeReducerState:UserTreeType ={
    parentId: null,
    nameParentTree:'',
    children:[]

}



export type UserTreeType = {
    parentId: number | null,
    nameParentTree: string
    children: UserChildrenType[]
}
export type UserChildrenType={
    id: number,
    name: string
    children: []
}

export type UserTreeActionsType = SetUserTreeType
    |SetChildrenTreeType


export const UserTreeReducer = (state: UserTreeType = userTreeReducerState, action: UserTreeActionsType): UserTreeType => {
    switch (action.type) {
        case "SET-USER-TREE-TYPE": {
            return {...state,parentId:action.payload.parentId,nameParentTree:action.payload.parentTitleTree}
        }
        case "SET-CHILDREN-TREE-TYPE":{
            return {...state,children:[...state.children,...action.payload.data]}
       }

//         case "SET-CHILDREN-USER-TREE":{
// return [...state,{...state,children:[...action.payload.params]}]
//         }
        default:
            return state
    }
}


export const GetUserTree = (treeName: string): AppThunkType =>
    async (dispatch) => {

        try {
            const res = await UserTreeApi.getUserTree(treeName)
            console.log('Response', res.data)
             dispatch(setUserTree(res.data.id,res.data.name))
            dispatch(setChildrenTree(res.data.children))
        } catch (err) {
            console.log(err)
        } finally {
            console.log('')
        }
    }
export const GetUserChildrenTree = ( params:{treeName: string, parentNodeId: number | null, nodeName: string}): AppThunkType => async (dispatch) => {
    try {

        const res = await UserTreeApi.getUserChildrenTree(params)
        console.log(res.data)

    } catch (err) {
        console.log(err)
    } finally {
        console.log('')
    }
}
