import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {thunk, ThunkAction, ThunkDispatch} from "redux-thunk";
import {UserTreeActionsType, UserTreeReducer} from "bll/reducers/userPostsReducer";
import {ModalReducer, ModalReducerActionsType} from "bll/reducers/modalReducer";
import {AppReducer, GeneralAppReducerType} from "bll/reducers/app-reducer";


export const rootReducer = combineReducers({
    userTree: UserTreeReducer,
    modal: ModalReducer,
    app: AppReducer
})
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType,
    StateType,
    undefined,
    ActionStateType>;
export type AppDispatch = ThunkDispatch<StateType,
    undefined,
    ActionStateType>;
export type ActionStateType = UserTreeActionsType
    | ModalReducerActionsType
    | GeneralAppReducerType
export type StateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer, applyMiddleware(thunk))

// @ts-ignore
window.store = store
