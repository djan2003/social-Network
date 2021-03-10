import {combineReducers, createStore,applyMiddleware} from "redux";
import {profilePageReduser} from "./ProfilePageReducer";
import {dialogsPageReduser} from "./DialogsPageReducer";
import {usersReduser} from "./UsersReducer";
import {AuthReduser} from "./AuthReducer";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'


export type StoreType = typeof store;
export type RootState = ReturnType<typeof redusers>;
let redusers =combineReducers({
    profilePageReduser,
    dialogsPageReduser,
    usersReduser,
    AuthReduser,
    form:formReducer

})

export let store = createStore(redusers,applyMiddleware(thunkMiddleware));
// @ts-ignore
window.store=store;