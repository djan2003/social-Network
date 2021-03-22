import React from "react";
import {ActionType} from "./stateType";
import {API} from "../api/axios-get";
import { RootState} from "./redux-store";
import {ThunkAction} from "redux-thunk";
import {stopSubmit} from "redux-form";

export type SetAuthActionType = ReturnType<typeof SetAuth>;


export type AuthReduserStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean

}
export const SetAuth = (data: AuthReduserStateType) => {
    return {
        type: "SET-AUTH",
        id: data.id,
        email: data.email,
        login: data.login,
        isAuth: data.isAuth
    } as const
}
let initialState: AuthReduserStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}


export const AuthReduser = (state = initialState, action: ActionType) => {

    if (action.type === "SET-AUTH") {
        return {
            ...state,
            id: action.id,
            email: action.email,
            login: action.login,
           isAuth: action.isAuth
        }
    }
    return state;
}

type AuthThunk<ReturnType = void|any> = ThunkAction<ReturnType, RootState, unknown, ActionType>


// @ts-ignore
export const authThunk = ():any => dispatch => {

  return   API.auth()
        .then(data => {
                if (data.resultCode === 0) {
                    let id = data.data.id
                    let login = data.data.login
                    let email = data.data.email
                    let isAuth = true
                    let dataForSetAuth = {id, login, email,isAuth}
                    dispatch(SetAuth(dataForSetAuth as AuthReduserStateType))

                }
            }
        )

}

export const loginThunk = (login: string, password: string, rememberMe: boolean): AuthThunk => {
    return (dispatch ) => {
        API.login(password, login, rememberMe)
            .then(data => {

                if (data.resultCode === 0) {
                       dispatch(authThunk())
                }
                else {

                    // @ts-ignore
                    dispatch(stopSubmit("login",
                        {_error:data.messages[0]?data.messages[0]:"some error"}))
                }


            })
    }
}
export const logoutThunk = (): AuthThunk => {
    return (dispatch ) => {
        API.logout()
            .then(data => {
                if (data.resultCode === 0) {
                    let id = null
                    let login = null
                    let email = null
                    let isAuth = false
                    let dataForSetAuth = {id, login, email,isAuth}

                    dispatch(SetAuth(dataForSetAuth))
                }

            })
    }
}
