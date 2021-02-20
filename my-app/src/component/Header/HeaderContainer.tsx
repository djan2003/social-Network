import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AuthReduserStateType, SetAuth} from "../../redux/AuthReducer";


export class HeaderContainer extends React.Component<any, any> {
    componentDidMount(): void {
        debugger
        axios.get(`https://social-network.samuraijs.com/api/1.0//auth/me`,{
            withCredentials:true
        })
            .then(response => {
                if(response.data.resultCode===0){
                    let id=response.data.data.id
                    let login=response.data.data.login
                    let email=response.data.data.email
                    let data={id,login,email}
                    this.props.SetAuth(data)
                }

            } )
    }

    render(): React.ReactNode {
        return(<Header isAuth={this.props.isAuth} email={this.props.email}  />)
    }
}
let MapStateToProps=(state:any)=>{
    return{
        isAuth:state.AuthReduser.isAuth,
        email:state.AuthReduser.email

    }
}
export const MainHaderContainer = connect(MapStateToProps,{SetAuth})(HeaderContainer)

