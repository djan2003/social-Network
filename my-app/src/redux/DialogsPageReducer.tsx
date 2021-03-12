 import React from "react";
 import {ActionType, diaologsDataType, messageDataType} from "./stateType";


export const addMessage = ( messageText:string)=>{
    return{
        type:"ADD-NEW-MESSAGE",
        messageText
    } as const
}
type initialStateType = {
    dialogsData:Array<diaologsDataType>
    messageData:Array<messageDataType>
}
let initialState:initialStateType = {
    dialogsData:[
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
    ]
}



export const dialogsPageReduser=(state=initialState,action:ActionType)=>{
    if (action.type === "ADD-NEW-MESSAGE") {
        const newMessage = {

            text: action.messageText,
            id: 55
        }
        return {
            ...state,
            messageData: [...state.messageData,newMessage],
        }

    }
        return state;
    }


