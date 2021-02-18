import React from "react";
import {diaologsDataType, messageDataType, newPostDataType} from "./stateType";
import {
    AddPostActionType,
    ChageTextForPostActionType,
    profilePageReduser,
    setUsersProfileActionType
} from "./ProfilePageReducer";
import {AddNewMessageAC, ChangetextForMessageAC, dialogsPageReduser} from "./DialogsPageReducer";
import {
    follow,
    setUsers,
    unFollow,
    setCurrentPage,
    setTotalUsersCount,
    toogleIsFetching
} from "./UsersReducer";

type profilePageType = {
    newPostData: Array<newPostDataType>
    newPostText: string
    profile:any
}
type dialogsPage = {
    dialodsData: Array<diaologsDataType>
    messageData: Array<messageDataType>
    newMessageText: string
}
export type stateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPage

}
export type ActionType = AddPostActionType |
    ChageTextForPostActionType |
    ChangetextForMessageType |
    AddNewMessageType |
    FollowACType |
    UnFollowACType|
    setCurrentPageAC|
    setTotalUsersCountAC|
    toogleIsFetchingACType|
    setUsersProfileActionType|
     setUsersACType;

type  ChangetextForMessageType = ReturnType<typeof ChangetextForMessageAC>
type  toogleIsFetchingACType = ReturnType<typeof toogleIsFetching>
type  setUsersACType = ReturnType<typeof setUsers>
type  FollowACType = ReturnType<typeof follow>
type  UnFollowACType = ReturnType<typeof unFollow>
type  setCurrentPageAC = ReturnType<typeof setCurrentPage>
type   setTotalUsersCountAC = ReturnType<typeof  setTotalUsersCount>
type  AddNewMessageType = ReturnType<typeof AddNewMessageAC>
type StoreType = {
    _state: stateType
    rerender: () => void
    subscriber: (observer: () => void) => void
    getState: () => stateType
    dispatch: (action: ActionType) => void
}


export const store: StoreType = {
    _state: {
        profilePage: {
            newPostData: [
                {id: 1, likes: 11, postName: "Это первый пост"},
                {id: 1, likes: 12, postName: "Это второй пост"},
                {id: 1, likes: 1258, postName: "Это третий пост"},
            ],
            newPostText: "",
            profile:null
        },
        dialogsPage: {
            dialodsData: [
                {name: "Slava", id: 1},
                {name: "Anna", id: 2},
                {name: "Alina", id: 3},
                {name: "Maksim", id: 4},
                {name: "Svetlana", id: 5},

            ],
            messageData: [
                {text: "Привет", id: 1},
                {text: "Пока", id: 2},
                {text: "АГА", id: 3},
            ],
            newMessageText: ""
        }


    },
    getState() {
        return this._state
    },
    rerender() {
        console.log("check")
    },
    subscriber(observer: () => void) {
        this.rerender = observer
    },
    dispatch(action) {
        this._state.profilePage = profilePageReduser(this._state.profilePage, action)
        this._state.dialogsPage = dialogsPageReduser(this._state.dialogsPage, action)
        this.rerender()
    }

}






