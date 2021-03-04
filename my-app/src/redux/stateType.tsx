import React from "react";
import {AddPostActionType, ChageTextForPostActionType, setUsersProfileActionType} from "./ProfilePageReducer";
import {addMessage,  changetextForMessage} from "./DialogsPageReducer";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toogleFollowingInProgress,
    toogleIsFetching,
    unFollow
} from "./UsersReducer";
import {SetAuthActionType} from "./AuthReducer";

export type newPostDataType = {
    id: number
    postName: string
    likes: number
}
export type diaologsDataType = {
    name: string
    id: number
}
export type messageDataType = {
    text: string
    id: number
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
    SetAuthActionType|
    toogleFollowingInProgressACType|
    setUsersACType;

type  ChangetextForMessageType = ReturnType<typeof  changetextForMessage>
type  toogleIsFetchingACType = ReturnType<typeof toogleIsFetching>
type  toogleFollowingInProgressACType = ReturnType<typeof toogleFollowingInProgress>
type  setUsersACType = ReturnType<typeof setUsers>
type  FollowACType = ReturnType<typeof follow>
type  UnFollowACType = ReturnType<typeof unFollow>
type  setCurrentPageAC = ReturnType<typeof setCurrentPage>
type   setTotalUsersCountAC = ReturnType<typeof  setTotalUsersCount>
type  AddNewMessageType = ReturnType<typeof addMessage>
