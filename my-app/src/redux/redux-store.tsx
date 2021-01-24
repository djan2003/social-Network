import {combineReducers, createStore} from "redux";
import {profilePageReduser} from "./ProfilePageReducer";
import {dialogsPageReduser} from "./DialogsPageReducer";


export type StoreType = typeof store;
let redusers =combineReducers({
    profilePageReduser,
    dialogsPageReduser
})

export let store = createStore(redusers);
