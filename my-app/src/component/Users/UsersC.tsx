import React from "react";
import {UsersType} from "../../redux/UsersReducer";
import s from "./users.module.css"
import  axios from"axios"
import userPhoto from "../../accets/userPhoto.jpg"

type PropsType={
    users:Array<UsersType>
    follow:(id:number)=>void
    Unfollow:(id:number)=>void
    SetUsers:any
}
class Users1 extends React.Component<PropsType>{

    componentDidMount(): void {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response =>{
            this.props.SetUsers(response.data.items)} )
    }

    render(): React.ReactNode {
        return(

            <div>
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