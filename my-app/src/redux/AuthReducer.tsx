import React from "react";
import {ActionType} from "./stateType";

export type SetAuthActionType = ReturnType<typeof SetAuth>;


export type AuthReduserStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth:boolean

}
export const SetAuth = (data: AuthReduserStateType) => {
    return {
        type: "SET-AUTH",
        id: data.id,
        email: data.email,
        login: data.login
    } as const
}
let initialState: AuthReduserStateType = {
    id: null,
    email: null,
    login: null,
    isAuth:false
}

export const AuthReduser = (state = initialState, action: ActionType) => {

    if (action.type === "SET-AUTH") {
        return {...state,
            id: action.id,
            email: action.email,
            login: action.login,
            isAuth:true}
    }
    return state;
}

