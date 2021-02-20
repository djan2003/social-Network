import {combineReducers, createStore} from "redux";
import {profilePageReduser} from "./ProfilePageReducer";
import {dialogsPageReduser} from "./DialogsPageReducer";
import {usersReduser} from "./UsersReducer";
import {AuthReduser} from "./AuthReducer";


export type StoreType = typeof store;
export type RootState = ReturnType<typeof redusers>;
let redusers =combineReducers({
    profilePageReduser,
    dialogsPageReduser,
    usersReduser,
    AuthReduser
})

export let store = createStore(redusers);
// @ts-ignore
window.store=store;