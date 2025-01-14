import {setUserTree, setUserTreeName, SetUserTreeType} from "bll/actions/userTreeActions";
import {AppThunkType, StateType} from "bll/store";
import {UserTreeApi} from "dal/api/userTree-api/userTree-api";
import {setChildrenUserTree, UserChildrenTreeActionsType} from "bll/actions/userChildrenTreeActions";

export const userTreeReducerState =
    {
        id: 0,
        name: "",
        children: []
    }

export type ChildrenTreeType = {
    id: number,
    name: string
    children: []
}
export type UserTreeReducerType = {
    id: number,
    name: string,
    children: ChildrenTreeType[]


}
export type UserTreeActionsType = SetUserTreeType
    | UserChildrenTreeActionsType

export const UserTreeReducer = (state: UserTreeReducerType = userTreeReducerState, action: UserTreeActionsType): UserTreeReducerType => {
    switch (action.type) {
        case "SET-USER-TYPE": {
            return {...state, children: [action.payload.data]}
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

            dispatch(setUserTree(res.data))
            dispatch(setUserTreeName(res.data.name))
        } catch (err) {
            console.log(err)
        } finally {
            console.log('')
        }
    }
export const GetUserChildrenTree = ( data:{treeName: string, parentNodeId: number, nodeName: string}): AppThunkType => async (dispatch) => {
    try {
        const res = await UserTreeApi.getUserChildrenTree(data)
        console.log(res.data)
        dispatch(setUserTree(res.data))
    } catch (err) {
        console.log(err)
    } finally {
        console.log('')
    }
}
