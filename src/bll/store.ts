import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {thunk} from "redux-thunk";
import {UserTreeReducer} from "bll/reducers/userPostsReducer";

export const rootReducer = combineReducers({
    userTree:UserTreeReducer
})
export const store = createStore(rootReducer,applyMiddleware(thunk))

// @ts-ignore
window.store = store
