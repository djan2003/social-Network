import React from "react";
import {connect} from "react-redux";
import {
    follow,
     setCurrentPage,
     setTotalUsersCount,
     setUsers,
     toogleIsFetching,
    unFollow,

    usersReduser,
    UsersType
} from "../../redux/UsersReducer";
import axios from "axios";
import {UsersClearComponent} from "./UsersClearComponent";
import preloader from "../../accets/preloader.gif"

type PropsType={
    toogleIsFetching:(isFetching:boolean)=>void
    isFetching:boolean
    users:Array<UsersType>
    setCurrentPage:(currentPage:number)=>void
    follow:(id:number)=>void
    unFollow:(id:number)=>void
    setUsers:any
    totalUsersCount:number
    pageSize:number
    currentPage:number
    setTotalUsersCount:(totalUsersCount:number)=>void

}
class UsersAPIComponent extends React.Component<PropsType>{

    componentDidMount(): void {
        this.props.toogleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=
        ${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toogleIsFetching(false)
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
            } )
    }
    onClickHandler=(pageNumber:number)=>{
        this.props.toogleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=
       ${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toogleIsFetching(false)
                this.props.setUsers(response.data.items);

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

            />
            </>
        )
    }
}

let mapStateToProps = (state: any) => {
    return {
        users: state.usersReduser.users,
        pageSize: state.usersReduser.pageSize,
        totalUsersCount: state.usersReduser.totalUsersCount,
        currentPage: state.usersReduser.currentPage,
        isFetching:state.usersReduser.isFetching
    }
}
/*let mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
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
        },
        ToogleIsFetching:(isFetching:boolean)=>{
            dispatch(toogleIsFetchingAC(isFetching))
        }

    }
}*/
export const UsersContainer = connect(mapStateToProps,{
    setTotalUsersCount,
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    toogleIsFetching
})(UsersAPIComponent);