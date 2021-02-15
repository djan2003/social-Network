import React from "react";
import {UsersType} from "../../redux/UsersReducer";
import s from "./users.module.css"
import  axios from"axios"
import userPhoto from "../../accets/userPhoto.jpg"

type PropsType={
    users:Array<UsersType>
    SetCurrentPage:(currentPage:number)=>void
    follow:(id:number)=>void
    Unfollow:(id:number)=>void
    SetUsers:any
    totalUsersCount:number
    pageSize:number
    currentPage:number
    setTotalUsersCount:(totalUsersCount:number)=>void

}
class Users1 extends React.Component<PropsType>{

    componentDidMount(): void {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.SetUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
            } )
    }
   onClickHandler=(pageNumber:number)=>{
        this.props.SetCurrentPage(pageNumber)
       axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
           .then(response => {
               this.props.SetUsers(response.data.items);

           } )
    }

    render(): React.ReactNode {
        let countOfPages=Math.ceil(this.props.totalUsersCount/this.props.pageSize)
        let pages =[];
        for (let i =1;i<=countOfPages; i++){
            pages.push(i)
        }

        return(
            <div>
                {pages.map(p=>{
                    return <span className={this.props.currentPage===p?s.selectedPage:""}
                                 onClick={()=>{this.onClickHandler(p)}}>{p}</span>
                })}


                {
                    this.props.users.map(u=><div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small?u.photos.small:userPhoto} className={s.fotostyle}/>
                    </div>
                    <div>{
                        u.followed
                            ?<button onClick={()=>{this.props.Unfollow(u.id)}}>FOLLOW</button>
                            :<button onClick={()=>{this.props.follow(u.id)}}>UNFOLLOW</button>
                    }

                    </div>
                </span>
                        <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status} </div>
                    </span>
                    <span>
                        <div>{"u.location.city"}</div>
                        <div>{"u.location.country"}</div>
                    </span>
                </span>
                    </div>)
                }
            </div>
        )
    }
}
export default Users1;