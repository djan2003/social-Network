import {combineReducers, createStore} from "redux";
import {profilePageReduser} from "./ProfilePageReducer";
import {dialogsPageReduser} from "./DialogsPageReducer";
import {usersReduser} from "./UsersReducer";


export type StoreType = typeof store;
let redusers =combineReducers({
    profilePageReduser,
    dialogsPageReduser,
    usersReduser
})

export let store = createStore(redusers);
// @ts-ignore
window.store=store;