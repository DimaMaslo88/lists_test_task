import {SetIsLoadingType} from "bll/actions/appRecuderAction";

const appReducerState={
    isLoading:false
}
type AppReducerType = {
    isLoading:boolean
}
export type GeneralAppReducerType=SetIsLoadingType

export const AppReducer=(state:AppReducerType=appReducerState,action:GeneralAppReducerType):AppReducerType=>{
    switch (action.type) {
        case "SET-IS-LOADING":{
            return {...state,isLoading:action.payload.isLoading}
        }

        default:return state
    }
}
