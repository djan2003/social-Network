import React from "react";
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unFollowAC,
    usersReduser,
    UsersType
} from "../../redux/UsersReducer";
import {ActionType} from "../../redux/state";
import Users1 from "./UsersC";

let mapStateToProps = (state: any) => {
    return {
        users: state.usersReduser.users,
        pageSize: state.usersReduser.pageSize,
        totalUsersCount: state.usersReduser.totalUsersCount,
        currentPage: state.usersReduser.currentPage
    }
}
let mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        setTotalUsersCount: (totalUsersCount: number) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        },
        follow: (id: number) => {
            dispatch(followAC(id))
        },
        Unfollow: (id: number) => {
            dispatch(unFollowAC(id))
        },
        SetUsers: (users: UsersType) => {
            dispatch(setUsersAC(users))
        },
        SetCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        }

    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users1);