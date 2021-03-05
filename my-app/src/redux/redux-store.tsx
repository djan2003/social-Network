import {combineReducers, createStore,applyMiddleware} from "redux";
import {profilePageReduser} from "./ProfilePageReducer";
import {dialogsPageReduser} from "./DialogsPageReducer";
import {usersReduser} from "./UsersReducer";
import {AuthReduser} from "./AuthReducer";
import thunkMiddleware from 'redux-thunk';


export type StoreType = typeof store;
export type RootState = ReturnType<typeof redusers>;
let redusers =combineReducers({
    profilePageReduser,
    dialogsPageReduser,
    usersReduser,
    AuthReduser
})

export let store = createStore(redusers,applyMiddleware(thunkMiddleware));
// @ts-ignore
window.store=store;