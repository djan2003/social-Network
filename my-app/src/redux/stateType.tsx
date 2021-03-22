import React from "react";
import {
    AddPostActionType,
    changeStatusProfileAC,
    getStatusProfileAC,
    setUsersProfileActionType
} from "./ProfilePageReducer";
import {addMessage} from "./DialogsPageReducer";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toogleFollowingInProgress,
    toogleIsFetching,
    unFollow
} from "./UsersReducer";
import {SetAuthActionType} from "./AuthReducer";
import {getInitializedActionType} from "./AppReducer";

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
export type ActionType =
    getInitializedActionType|
    AddPostActionType |
    AddNewMessageType |
    FollowACType |
    UnFollowACType|
    setCurrentPageAC|
    setTotalUsersCountAC|
    toogleIsFetchingACType|
    setUsersProfileActionType|
    SetAuthActionType|
    toogleFollowingInProgressACType|
    getStatusProfileACType|
    changeStatusProfileACType|
    setUsersACType;

type  toogleIsFetchingACType = ReturnType<typeof toogleIsFetching>
type  toogleFollowingInProgressACType = ReturnType<typeof toogleFollowingInProgress>
type  setUsersACType = ReturnType<typeof setUsers>
type  FollowACType = ReturnType<typeof follow>
type  UnFollowACType = ReturnType<typeof unFollow>
type  setCurrentPageAC = ReturnType<typeof setCurrentPage>
type   setTotalUsersCountAC = ReturnType<typeof  setTotalUsersCount>
type  AddNewMessageType = ReturnType<typeof addMessage>
type getStatusProfileACType = ReturnType<typeof getStatusProfileAC>
type changeStatusProfileACType = ReturnType<typeof changeStatusProfileAC>
