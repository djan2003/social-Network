import React from "react";
import {ActionType} from "./stateType";

export type AddPostActionType=ReturnType<typeof AddPostAC >;
export type ChageTextForPostActionType=ReturnType<typeof ChageTextForPostAC >;
export type setUsersProfileActionType=ReturnType<typeof setUsersProfile >;


export const AddPostAC = (newPostText:string)=>{
    return{
        type :"ADD-POST",
        newPostText:newPostText
    } as const
}
export const ChageTextForPostAC = ( newText:string)=>{
    return{
        type:"CHANGE-TEXT-FOR-POST",
        newText: newText
    } as const
}
export const setUsersProfile = ( profile:any)=>{
    return{
        type:"SET-USERS-PROFILE",
        profile
    } as const
}

let initialState = {
    newPostData: [
        {id: 1, likes: 11, postName: "Это первый пост"},
        {id: 1, likes: 12, postName: "Это второй пост"},
        {id: 1, likes: 1258, postName: "Это третий пост"},
    ],
    newPostText: "",
    profile:{}
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
            stateCopy.newPostText="";
            return stateCopy

        }
        else if (action.type === "CHANGE-TEXT-FOR-POST"){
            let stateCopy = {...state}
            stateCopy.newPostText=action.newText;
            return stateCopy
        }
        else if (action.type === "SET-USERS-PROFILE"){
            let stateCopy = {...state}
            stateCopy.profile=action.profile;
            return stateCopy
        }
        return state;
    }

