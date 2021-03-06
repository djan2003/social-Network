import React, {ComponentType} from "react"
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {RootState} from "../redux/redux-store";

type MstpType={
    isAuth:boolean
}

const mstp=(state:RootState):MstpType=>{
    return{
        isAuth:state.AuthReduser.isAuth
    }
}

export function WithAuthRedirect <T> (Component:ComponentType<T>){
    let WrapperWithRedirect=(props:MstpType)=>{
        let {isAuth, ...restProps}=props
       if (!isAuth) return <Redirect to={"/Login"}/>
       return <Component {...restProps as T}/>
    }
    let ConnectWrapperWithRedirect=connect(mstp)(WrapperWithRedirect)

    return ConnectWrapperWithRedirect
}