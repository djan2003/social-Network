import React from "react";
import {Field, reduxForm} from "redux-form";
import {InjectedFormProps} from "redux-form/lib/reduxForm";

export type FormDataType ={
    login:string
    password:string
    rememberMe:boolean
}


export const FormForLogin:React.FC<InjectedFormProps<FormDataType>> =
    (props)=>{
    return(
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field name={"login"} component={"input"} placeholder={"login"}/>
            </div>
            <div>
                <Field name={"password"} component={"input"} placeholder={"password"}/>
            </div>
            <div>
                <Field  name={"rememberMe"} component={"input"} type={"checkbox"}/>remember me
            </div>
            <div>
               <button>LOGIN</button>
            </div>


        </form>
    )

}

export const ReduxFormForLogin=  reduxForm<FormDataType>({
    form: 'login' // a unique name for this form
})(FormForLogin);