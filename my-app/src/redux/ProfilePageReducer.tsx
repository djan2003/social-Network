import React from "react";
import {ActionType} from "./stateType";
import {API, APIForProfile} from "../api/axios-get";

export type AddPostActionType=ReturnType<typeof AddPostAC >;
export type setUsersProfileActionType=ReturnType<typeof setUsersProfile >;


export const AddPostAC = (newPostText:string)=>{
    return{
        type :"ADD-POST",
        newPostText
    } as const
}
export const setUsersProfile = ( profile:any)=>{
    return{
        type:"SET-USERS-PROFILE",
        profile
    } as const
}
export const getStatusProfileAC=(status:string)=>{
    return{
        type:"GET-STATUS-PROFILE",
        status
    }as const
}
export const changeStatusProfileAC=(status: string)=>{
    return{
        type:"CHANGE-STATUS-PROFILE",
        status
    }as const
}

let initialState = {
    newPostData: [
        {id: 1, likes: 11, postName: "Это первый пост"},
        {id: 1, likes: 12, postName: "Это второй пост"},
        {id: 1, likes: 1258, postName: "Это третий пост"},
    ],
    /*newPostText: "",*/
    profile:{},
    status:"status from initialState"
}

export const getProfileThunk=(userID:any)=>{
    return (dispatch:(action:ActionType)=>void)=>{
        API.getProfile(userID)
            .then((data:any) => {
                dispatch(setUsersProfile(data))
            } )
    }
}
export const getStatusProfileThunk=(userID: string)=>{
    return (dispatch:(action:ActionType)=>void)=>{
        APIForProfile.getStatusProfile(userID)
            .then((data:any) => {
                dispatch(getStatusProfileAC(data))
            } )
    }
}
export const changeStatusProfileThunk=(status:string)=>{
    return (dispatch:(action:ActionType)=>void)=>{
        APIForProfile.changeProfileStatus(status)
            .then((response:any) => {
                if(response.data.resultCode===0){
                    dispatch(changeStatusProfileAC(status))}

            } )
    }
}

export const profilePageReduser=(state=initialState,action:ActionType)=>{

        if(action.type === "ADD-POST"){
            const newPost={
                id:5,
                likes:0,
                postName:action.newPostText
            }
            let stateCopy={...state}
            stateCopy.newPostData=[...state.newPostData]
            stateCopy.newPostData.push(newPost)
            return stateCopy

        }
        else if (action.type === "SET-USERS-PROFILE"){
            let stateCopy = {...state}
            stateCopy.profile=action.profile;
            return stateCopy
        }
        else if (action.type === "CHANGE-STATUS-PROFILE"){
            return {
                ...state,
                status:action.status
            }
        }
        else if (action.type === "GET-STATUS-PROFILE"){
                let stateCopy = {...state}
                stateCopy.status=action.status;
                return stateCopy
              /*  ...state,
                status:action.status*/

        }
        return state;
    }

