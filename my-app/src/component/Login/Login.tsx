import React from "react";
import {FormDataType, ReduxFormForLogin} from "./formForLogin";

export const Login = ()=>{
    const onSubmit = (formData:FormDataType)=>{
        console.log(formData)
    }

  return (
      <>
      <h1>Login</h1>
        <ReduxFormForLogin onSubmit={onSubmit} />

      </>
  )

}