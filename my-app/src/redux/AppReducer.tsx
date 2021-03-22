import React from "react";
import {ActionType} from "./stateType";
import { RootState} from "./redux-store";
import {ThunkAction} from "redux-thunk";
import {authThunk} from "./AuthReducer";


export type AppReducerStateType = {
    initialized:boolean

}

let initialState:AppReducerStateType = {
   initialized:false
}
export const AppReduser = (state = initialState, action: ActionType) => {

    if (action.type === "GET-INITIALIZED") {
        return {
            ...state,
            initialized:true
        }
    }
    return state;
}
export type getInitializedActionType = ReturnType<typeof getInitialized>;
const getInitialized = ()=>({
    type:"GET-INITIALIZED"
} as const)

type InitializedThunkType<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionType>


export const InitializedThunk = ():InitializedThunkType => dispatch => {
   dispatch(authThunk())
       .then(()=>{
        dispatch(getInitialized())
    })

}

