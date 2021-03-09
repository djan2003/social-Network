import React from "react";
import {ActionType} from "./stateType";
import {API} from "../api/axios-get";


export const follow = ( id:number)=>{
    return{
        type:"FOLLOW",
       id:id
    } as const
}
export const unFollow = (id:number)=>{
    return{
        type:"UNFOLLOW",
        id:id
    } as const
}
export const setUsers=(users:any)=>{
    return{
        type:"SET-USERS",
        users:users
    }as const
}
export const toogleIsFetching=(isFetching:boolean)=>{
    return{
        type:"TOOGLE-IS-FETCHING",
        isFetching

    }as const
}
export const toogleFollowingInProgress=(isFollowingInProgress:boolean, userID:number)=>{
    return{
        type:"FOLLOWING-IN-PROGRESS",
        isFollowingInProgress,
        userID
    }as const
}
export const setCurrentPage=(currentPage:number)=>{
    return{
        type:"SET-CURRENT-PAGE",
        currentPage
    }as const
}
export const setTotalUsersCount=(totalUsersCount:number)=>{
    return{
        type:"SET-TOTAL-USERS-COUNT",
        totalUsersCount
    }as const
}

type LocationType={
    city:string
    country:string
}
export type UsersType={
    photos:any;
    id:number
    name:string
    status:string
    followed:boolean
    location:LocationType

}
type InitialStateType = {
    users:Array<UsersType>
    pageSize:number
    totalUsersCount:number
    currentPage:number
    isFetching:boolean
    followingInProgress:any
}
let initialState:InitialStateType = {
    users:[],
    pageSize:5,
    totalUsersCount:0,
    currentPage:1,
    isFetching:true,
    followingInProgress:[]
}

export const getUsers=(currentPage:number,pageSize:number)=>{
    return (dispatch:(action:ActionType)=>void)=>{
        dispatch(toogleIsFetching(true))
        API.getUsers(currentPage,pageSize)
            .then((data:any) => {
                dispatch(toogleIsFetching(false))
             dispatch(setUsers(data.items))
               dispatch(setTotalUsersCount(data.totalCount))
            } )

    }
}
export const unFollowThunk=(Users:any,UserID:any)=>{
    return (dispatch:(action:ActionType)=>void)=>{
        dispatch(toogleFollowingInProgress(true,UserID))
        API.unfollow(Users)
            .then(data => {
                if (data.resultCode == 0) {
                    dispatch(unFollow(UserID))
                }
                dispatch(toogleFollowingInProgress(false,UserID))
            })
    }
}
export const FollowThunk=(Users:any, UserID:any)=>{
    return (dispatch:(action:ActionType)=>void)=>{
        dispatch(toogleFollowingInProgress(true,UserID))
        API.follow(Users)
            .then(data => {
                if (data.resultCode == 0) {
                    dispatch(follow(UserID))
                }
                dispatch(toogleFollowingInProgress(false,UserID))
            })}

}


export const usersReduser=(state=initialState,action:ActionType)=>{
    if(action.type==="FOLLOW"){
        return{...state,
            users:state.users.map(u=>{
                if(u.id===action.id){
                    return{...u,followed:true}
                }
              return u
            })
        }
    }
    else if(action.type==="UNFOLLOW"){
        return{...state,
            users:state.users.map(u=>{
                if(u.id===action.id){
                    return{...u,followed:false}
                }
              return u
            })
        }
    }
    else if(action.type==="SET-USERS"){
        return{...state, users:action.users}
    }
    else if(action.type==="SET-CURRENT-PAGE"){
        return{...state, currentPage:action.currentPage}
    }
    else if(action.type==="SET-TOTAL-USERS-COUNT"){
        return{...state, totalUsersCount:action.totalUsersCount}
    }
    else if(action.type==="TOOGLE-IS-FETCHING"){
        return{...state, isFetching:action.isFetching}
    }
    else if(action.type==="FOLLOWING-IN-PROGRESS"){
        return{...state,
            followingInProgress:action.isFollowingInProgress
                ?[...state.followingInProgress,action.userID]
                : state.followingInProgress.filter((id:number)=>id!==action.userID)
        }
    }
    else return state
}


