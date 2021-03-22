import {combineReducers, createStore,applyMiddleware} from "redux";
import {profilePageReduser} from "./ProfilePageReducer";
import {dialogsPageReduser} from "./DialogsPageReducer";
import {usersReduser} from "./UsersReducer";
import {AuthReduser} from "./AuthReducer";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import {AppReduser} from "./AppReducer";


export type StoreType = typeof store;
export type RootState = ReturnType<typeof redusers>;
export type AppDispatch = typeof store.dispatch
let redusers =combineReducers({
    profilePageReduser,
    dialogsPageReduser,
    usersReduser,
    AuthReduser,
    form:formReducer,
    app:AppReduser

})


export let store = createStore(redusers,applyMiddleware(thunkMiddleware));
// @ts-ignore
window.store=store;