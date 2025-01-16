import {setUserTree, setUserTreeName, SetUserTreeNameType, SetUserTreeType} from "bll/actions/userTreeActions";
import {AppThunkType, StateType} from "bll/store";
import {UserTreeApi} from "dal/api/userTree-api/userTree-api";
import {setChildrenUserTree, UserChildrenTreeActionsType} from "bll/actions/userChildrenTreeActions";

export const userTreeReducerState:UserTreeType[] =[

]

export type UserTreeType = {
    id: number,
    name: string
    children: []
}

export type UserTreeActionsType = SetUserTreeType
    |SetUserTreeNameType


export const UserTreeReducer = (state: UserTreeType[] = userTreeReducerState, action: UserTreeActionsType): UserTreeType[] => {
    switch (action.type) {
        case "SET-USER-TREE-TYPE": {
            return [...state,{...action.payload.data}]
        }
        // case "SET-USER-TREE-NAME-TYPE":{
        //     return {...state.map(m=>m.name:action.payload.name)}
        // }

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


            // dispatch(setUserTreeName(res.data.name))
        } catch (err) {
            console.log(err)
        } finally {
            console.log('')
        }
    }
export const GetUserChildrenTree = ( data:{treeName: string, parentNodeId: number, nodeName: string}): AppThunkType => async (dispatch) => {
    try {
        debugger
        const res = await UserTreeApi.getUserChildrenTree(data)
        console.log(res.data)
        dispatch(setUserTree(res.data))
    } catch (err) {
        console.log(err)
    } finally {
        console.log('')
    }
}
