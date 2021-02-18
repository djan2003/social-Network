import React from "react";
import {ActionType} from "./state";


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
}
let initialState:InitialStateType = {
    users:[],
    pageSize:5,
    totalUsersCount:0,
    currentPage:1,
    isFetching:true
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
    else return state


}