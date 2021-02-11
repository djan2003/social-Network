import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unFollowAC, usersReduser, UsersType} from "../../redux/UsersReducer";
import {ActionType} from "../../redux/state";
import Users1 from "./UsersC";
let mapStateToProps=(state:any)=>{
    return{
users:state.usersReduser.users
    }
}
let mapDispatchToProps=(dispatch:(action:ActionType)=>void)=>{
    return{
follow:(id:number)=>{
    dispatch(followAC(id))
},
Unfollow:(id:number)=>{
    dispatch(unFollowAC(id))
},
SetUsers:(users:UsersType)=>{
    dispatch(setUsersAC(users))
}
    }
}
export const UsersContainer=connect(mapStateToProps,mapDispatchToProps)(Users1);