import React from "react";
import {ActionType} from "./state";

export type AddPostActionType=ReturnType<typeof AddPostAC >;
export type ChageTextForPostActionType=ReturnType<typeof ChageTextForPostAC >;


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

let initialState = {
    newPostData: [
        {id: 1, likes: 11, postName: "Это первый пост"},
        {id: 1, likes: 12, postName: "Это второй пост"},
        {id: 1, likes: 1258, postName: "Это третий пост"},
    ],
    newPostText: ""
}

export const profilePageReduser=(state=initialState,action:ActionType)=>{

        if(action.type === "ADD-POST"){
            const newPost={
                id:5,
                likes:0,
                postName:action.newPostText
            }
            state.newPostData.push(newPost)
            state.newPostText="";

        }
        else if (action.type === "CHANGE-TEXT-FOR-POST"){
            state.newPostText=action.newText;
        }
        return state;
    }
