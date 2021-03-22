import React from "react";
import {Field, reduxForm} from "redux-form";
import {InjectedFormProps} from "redux-form/lib/reduxForm";
import {InputeForForm} from "../../common/TexareaForForm";
import {reguiredField} from "../../utilites/helper";

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
                <Field name={"login"} component={InputeForForm}
                       placeholder={"login"} validate={[reguiredField]} />
            </div>
            <div>
                <Field name={"password"} component={InputeForForm}
                       placeholder={"password"} validate={[reguiredField]} />
            </div>
            <div>
                <Field  name={"rememberMe"} component={InputeForForm} type={"checkbox"}/>remember me
            </div>
            { props.error&& <div>
                {props.error}
            </div>}

            <div>
               <button>LOGIN</button>
            </div>


        </form>
    )

}

export const ReduxFormForLogin=  reduxForm<FormDataType>({
    form: 'login' // a unique name for this form
})(FormForLogin);