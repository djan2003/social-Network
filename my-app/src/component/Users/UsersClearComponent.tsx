import React from "react";
import s from "./users.module.css";
import userPhoto from "../../accets/userPhoto.jpg";
import {UsersType} from "../../redux/UsersReducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

type PropsType={
    onClickHandler:(pageNumber:number)=>void
    users:Array<UsersType>
    follow:(id:number)=>void
    Unfollow:(id:number)=>void
    totalUsersCount:number
    pageSize:number
    currentPage:number

}



export const UsersClearComponent=(props:PropsType)=>{
    let countOfPages=Math.ceil(props.totalUsersCount/props.pageSize)
    let pages =[];
    for (let i =1;i<=countOfPages; i++){
        pages.push(i)
    }

    return(

        <div>
            {pages.map(p=>{
                return <span className={props.currentPage===p?s.selectedPage:""}
                             onClick={()=>{props.onClickHandler(p)}}>{p}</span>
            })}


            {
                props.users.map(u=><div key={u.id}>
                <span>
                    <div>
                        <NavLink to={"/profile/"+u.id}>
                        <img src={u.photos.small?u.photos.small:userPhoto} className={s.fotostyle}/>
                        </NavLink>
                    </div>
                    <div>{
                        u.followed
                            ?<button onClick={()=>{ axios.delete(
                                `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                            {withCredentials:true,
                            headers:{
                                "api-key":"6914c902-ebb2-47bd-8235-de43c8962e59"
                            }
                            })
                                .then(response => {
                                    if(response.data.resultCode==0){props.Unfollow(u.id)}} )}}>UNFOLLOW</button>
                            :<button onClick={()=>{ axios.post(
                            `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},
                            {withCredentials:true,
                                headers:{
                                    "api-key":"6914c902-ebb2-47bd-8235-de43c8962e59"
                                }
                            })
                                .then(response => {
                                    if(response.data.resultCode==0){props.follow(u.id)}} )}}>FOLLOW</button>
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