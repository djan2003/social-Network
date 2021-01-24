import React from "react";
import {ActionType} from "./state";

export const ChangetextForMessageAC = ( newMessageText:string)=>{
    return{
        type:"CHANGE-TEXT-FOR-MESSAGE",
        newMessageText: newMessageText
    } as const
}
export const AddNewMessageAC = ( messageText:string)=>{
    return{
        type:"ADD-NEW-MESSAGE",
        messageText: messageText
    } as const
}
let initialState = {
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
    newMessageText:""
}



export const dialogsPageReduser=(state=initialState,action:ActionType)=>{
    if (action.type === "ADD-NEW-MESSAGE") {
        const newMessage = {

            text: action.messageText,
            id: 55
        }
        state.messageData.push(newMessage)
        state.newMessageText = "";
        state.newMessageText = action.messageText;
    } else if (action.type === "CHANGE-TEXT-FOR-MESSAGE") {
        state.newMessageText = action.newMessageText;
    }
        return state;
    }


