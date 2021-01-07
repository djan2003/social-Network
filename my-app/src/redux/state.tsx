import React from "react";
import {diaologsDataType, messageDataType, newPostDataType} from "./stateType";
import {rerenderTree} from "../Rerender";
export type stateType = {
    newPostData:Array<newPostDataType>
    dialodsData:Array<diaologsDataType>
    messageData:Array<messageDataType>
    newPostText:string
}
export type rerenderTreeType={
    rerenderTree:(state:stateType)=>void
}


export let state:stateType = {
    newPostData:[
        {id: 1, likes: 11, postName: "Это первый пост"},
        {id: 1, likes: 12, postName: "Это второй пост"},
        {id: 1, likes: 1258, postName: "Это третий пост"},
    ],
    dialodsData:[
        {name: "Slava", id: 1},
        {name: "Anna", id: 2},
        {name: "Alina", id: 3},
        {name: "Maksim", id: 4},
        {name: "Svetlana", id: 5},

    ],
    messageData:[
        {text: "Привет", id: 1},
        {text: "Пока", id: 2},
        {text: "АГА", id: 3},

    ],
    newPostText:""
}

export const addPost=(newPostText:string)=>{
    const newPost={
        id:5,
        likes:0,
        postName:newPostText
    }
    state.newPostData.push(newPost)
    state.newPostText="";
    rerenderTree(state)
}
export const chageTextForPost=(newText:string)=>{
    state.newPostText=newText;
    rerenderTree(state)
}