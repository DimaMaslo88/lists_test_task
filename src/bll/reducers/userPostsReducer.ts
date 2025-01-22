import {
    setChildrenTree,
    SetChildrenTreeType,
    setUserTree,
    SetUserTreeType
} from "bll/actions/userTreeActions";
import {AppThunkType} from "bll/store";
import {UserTreeApi} from "dal/api/userTree-api/userTree-api";
import {setIsLoading} from "bll/actions/appRecuderAction";


export const userTreeReducerState: UserTreeType = {
    parentId: null,
    nameParentTree: '',
    children: []

}


export type UserTreeType = {
    parentId: number | null,
    nameParentTree: string
    children: UserChildrenType[]
}
export type UserChildrenType = {
    id: number,
    name: string
    children: []
}

export type UserTreeActionsType = SetUserTreeType
    | SetChildrenTreeType


export const UserTreeReducer = (state: UserTreeType = userTreeReducerState, action: UserTreeActionsType): UserTreeType => {
    switch (action.type) {
        case "SET-USER-TREE-TYPE": {
            return {...state, parentId: action.payload.parentId, nameParentTree: action.payload.parentTitleTree}
        }
        case "SET-CHILDREN-TREE-TYPE": {
            return {...state, children: [...state.children, ...action.payload.data]}
        }


        default:
            return state
    }
}


export const GetUserTree = (treeName: string): AppThunkType =>
    async (dispatch) => {
        dispatch(setIsLoading(true))
        try {
            const res = await UserTreeApi.getUserTree(treeName)
            console.log('Response', res.data)
            dispatch(setUserTree(res.data.id, res.data.name))
            dispatch(setChildrenTree(res.data.children))
        } catch (err) {
            console.log(err)
        } finally {
           dispatch(setIsLoading(false))
        }
    }
export const GetUserChildrenTree = (params: { treeName: string, parentNodeId: number | null, nodeName: string }): AppThunkType => async (dispatch) => {
    dispatch(setIsLoading(true))
    try {
        const res = await UserTreeApi.getUserChildrenTree(params)
        console.log(res.data)
        dispatch(setChildrenTree(res.data.children))
    } catch (err) {
        console.log(err)
    } finally {
        dispatch(setIsLoading(false))
    }
}
