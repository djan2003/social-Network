import React from "react";
import {ActionType} from "./stateType";
import {API} from "../api/axios-get";

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
 export const authThunk=()=>{
    return (dispatch:(action:ActionType)=>void)=>{
     API.auth()
         .then(data => {
             if(data.resultCode===0){
                 let id=data.data.id
                 let login=data.data.login
                 let email=data.data.email
                 let dataForSetAuth={id,login,email}
                 dispatch(SetAuth(dataForSetAuth as AuthReduserStateType))
             }

         } )
 }
 }
