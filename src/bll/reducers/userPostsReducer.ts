import {setUserTree, SetUserTreeType} from "bll/actions/userTreeActions";
import {AppThunkType} from "bll/store";
import {UserTreeApi} from "dal/api/userTree-api/userTree-api";

export const userTreeReducerState = {
    id: 0,
    name: "",
    children: []
}
export type ChildrenTreeType = {
    id: number,
    name: string
}
export type UserTreeReducerType = {
    id: number,
    name: string,
    children: ChildrenTreeType[]


}
export type UserTreeActionsType = SetUserTreeType

export const UserTreeReducer = (state: UserTreeReducerType = userTreeReducerState, action: UserTreeActionsType): UserTreeReducerType => {
    switch (action.type) {
        case "SET-USER-TYPE":{
            return {...state,...action.payload.data}
        }
        default:
            return state
    }
}


export const GetUserTree =(treeName:string):AppThunkType=>async (dispatch)=>{
try{
    const res = await UserTreeApi.getUserTree(treeName)
    console.log('Response',res.data)
    dispatch(setUserTree(res.data))

}catch (err){
    console.log(err)
}finally {
    console.log('')
}
}
