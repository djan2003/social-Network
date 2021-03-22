import React from "react";
import {FormDataType, ReduxFormForLogin} from "./formForLogin";
import {connect} from "react-redux";
import {loginThunk} from "../../redux/AuthReducer";
import { Redirect } from "react-router-dom";
import {RootState} from "../../redux/redux-store";

 export const Login = (props:any)=>{
    const onSubmit = (formData:FormDataType)=>{
        let {login, password, rememberMe} = formData
        props.loginThunk(password,login,rememberMe)
    }
if(props.isAuth){
    return <Redirect to={"/profile"}/>
}
  return (
      <>
      <h1>Login</h1>
        <ReduxFormForLogin onSubmit={onSubmit} />

      </>
  )

}
const MSTP =(state:RootState)=>({
    isAuth:state.AuthReduser.isAuth
})
export const Login2 = connect(MSTP, {loginThunk})( Login)