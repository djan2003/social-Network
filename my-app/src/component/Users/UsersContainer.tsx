import React from "react";
import {connect} from "react-redux";
import {
    follow, FollowThunk,
    getUsers,
    setCurrentPage,
    toogleFollowingInProgress,
    unFollow, unFollowThunk,
    UsersType
} from "../../redux/UsersReducer";
import {UsersClearComponent} from "./UsersClearComponent";
import preloader from "../../accets/preloader.gif"
import {RootState} from "../../redux/redux-store";
import {WithAuthRedirect} from "../../Hoc/withAuthRedirect";

type PropsType = {
    isFetching: boolean
    users: Array<UsersType>
    setCurrentPage: (currentPage: number) => void
    follow: (id: number) => void
    unFollow: (id: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    toogleFollowingInProgress: (isFollowingInProgress: any, userId: any) => void
    followingInProgress: any
    getUsers: (currentPage: number, pageSize: number) => void
    unFollowThunk: (Users: any, UserID: any) => void
    FollowThunk: (Users: any, UserID: any) => void

}

class UsersAPIComponent extends React.Component<PropsType> {

    componentDidMount(): void {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onClickHandler = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render(): React.ReactNode {
        return (
            <>
                {this.props.isFetching ? <img src={preloader}/> : null}
                <UsersClearComponent
                    pageSize={this.props.pageSize}
                    totalUsersCount={this.props.totalUsersCount}
                    currentPage={this.props.currentPage}
                    onClickHandler={this.onClickHandler}
                    users={this.props.users}
                    follow={this.props.follow}
                    Unfollow={this.props.unFollow}
                    toogleFollowingInProgress={this.props.toogleFollowingInProgress}
                    followingInProgress={this.props.followingInProgress}
                    unFollowThunk={this.props.unFollowThunk}
                    FollowThunk={this.props.FollowThunk}
                />


            </>
        )
    }
}

let mapStateToProps = (state: RootState) => {
    return {
        users: state.usersReduser.users,
        pageSize: state.usersReduser.pageSize,
        totalUsersCount: state.usersReduser.totalUsersCount,
        currentPage: state.usersReduser.currentPage,
        isFetching: state.usersReduser.isFetching,
        followingInProgress: state.usersReduser.followingInProgress,
    }
}


export const UsersContainer = WithAuthRedirect(  connect(mapStateToProps, {
    follow,
    unFollow,
    setCurrentPage,
    toogleFollowingInProgress,
    getUsers,
    unFollowThunk,
    FollowThunk
})(UsersAPIComponent))