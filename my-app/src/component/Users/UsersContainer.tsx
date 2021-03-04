import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toogleFollowingInProgress,
    toogleIsFetching,
    unFollow,

    usersReduser,
    UsersType
} from "../../redux/UsersReducer";
import {UsersClearComponent} from "./UsersClearComponent";
import preloader from "../../accets/preloader.gif"
import {RootState} from "../../redux/redux-store";
import {API} from "../../api/axios-get";

type PropsType={
    toogleIsFetching:(isFetching:boolean)=>void
    isFetching:boolean
    users:Array<UsersType>
    setCurrentPage:(currentPage:number)=>void
    follow:(id:number)=>void
    unFollow:(id:number)=>void
    setUsers:(state:any)=>void
    totalUsersCount:number
    pageSize:number
    currentPage:number
    setTotalUsersCount:(totalUsersCount:number)=>void
    toogleFollowingInProgress:(isFollowingInProgress:any,userId:any)=>void
    followingInProgress:any

}
class UsersAPIComponent extends React.Component<PropsType>{

    componentDidMount(): void {
        this.props.toogleIsFetching(true)
        API.getUsers(this.props.currentPage,this.props.pageSize)
            .then((data:any) => {
                this.props.toogleIsFetching(false)
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount)
            } )
    }
    onClickHandler=(pageNumber:number)=>{
        this.props.toogleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        API.getUsers(pageNumber,this.props.pageSize)
            .then((data:any) => {
                this.props.toogleIsFetching(false)
                this.props.setUsers(data.items);

            } )
    }

    render(): React.ReactNode {

        return(
            <>
                {this.props.isFetching?<img src={preloader}/>:null}
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

            />
            </>
        )
    }
}

let mapStateToProps = (state:RootState) => {
    return {
        users: state.usersReduser.users,
        pageSize: state.usersReduser.pageSize,
        totalUsersCount: state.usersReduser.totalUsersCount,
        currentPage: state.usersReduser.currentPage,
        isFetching:state.usersReduser.isFetching,
        followingInProgress:state.usersReduser.followingInProgress
    }
}


export const UsersContainer = connect(mapStateToProps,{
    setTotalUsersCount,
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    toogleIsFetching,
    toogleFollowingInProgress
})(UsersAPIComponent);