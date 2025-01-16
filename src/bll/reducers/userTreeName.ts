import {SetUserTreeNameType} from "bll/actions/userTreeActions";

export const userTreeNameState ={
    treeName:''
}
export type UserTreeNameType={
    treeName:string
}
export type UserTreeNameReducerActions = SetUserTreeNameType
export const UserTreeNameReducer =(state:UserTreeNameType=userTreeNameState,action:UserTreeNameReducerActions):UserTreeNameType=>{
    switch (action.type) {
        case "SET-USER-TREE-NAME-TYPE":{
            return {...state,treeName:action.payload.name}
        }


        default:return state
    }
}
