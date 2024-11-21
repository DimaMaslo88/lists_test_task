import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {thunk, ThunkAction, ThunkDispatch} from "redux-thunk";
import {UserTreeActionsType, UserTreeReducer} from "bll/reducers/userPostsReducer";
import {ModalReducer, ModalReducerActionsType} from "bll/reducers/modalReducer";
import {UserTreeNameReducer, UserTreeNameReducerActions} from "bll/reducers/userTreeName";

export const rootReducer = combineReducers({
    userTree:UserTreeReducer,
    modal:ModalReducer,
    userTreeName:UserTreeNameReducer
})
export type AppThunkType<ReturnType = void> = ThunkAction<
    ReturnType,
    StateType,
    undefined,
    ActionStateType
    >;
export type AppDispatch = ThunkDispatch<
    StateType,
    undefined,
    ActionStateType
    >;
export type ActionStateType = UserTreeActionsType
|ModalReducerActionsType
|UserTreeNameReducerActions
export type StateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer,applyMiddleware(thunk))

// @ts-ignore
window.store = store
