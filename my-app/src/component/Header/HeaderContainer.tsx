import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AuthReduserStateType, authThunk, SetAuth} from "../../redux/AuthReducer";
import {RootState, StoreType} from "../../redux/redux-store";
import {API} from "../../api/axios-get";

type PropsType=MSTPType&MDTPType

export class HeaderContainer extends React.Component<any> {
    componentDidMount(): void {
        this.props.authThunk()
     /*  API.auth()
            .then(data => {
                if(data.resultCode===0){
                    let id=data.data.id
                    let login=data.data.login
                    let email=data.data.email
                    let dataForSetAuth={id,login,email}
                    this.props.SetAuth(dataForSetAuth as AuthReduserStateType)
                }

            } )*/
    }

    render(): React.ReactNode {
        return(<Header isAuth={this.props.isAuth} email={this.props.email}  />)
    }
}
type MSTPType={
    isAuth:boolean
    email:string
}
let MapStateToProps=(state:RootState):MSTPType=>{
    return{
        isAuth: state.AuthReduser.isAuth,
        email: state.AuthReduser.email

    } as MSTPType
}
type MDTPType={
    authThunk:()=>void
}
export const MainHaderContainer = connect(MapStateToProps,{authThunk})(HeaderContainer)

