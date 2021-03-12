import React from "react";
import {Field, reduxForm} from "redux-form";
import {InjectedFormProps} from "redux-form/lib/reduxForm";
import {FormDataTypeForNewPost} from "../../Profile/NewPost/FormForNewPost";

export type FormDataTypeFormForNewMessage ={
    textForNewMessage:string
}


export const FormForNewMessage:React.FC<InjectedFormProps<FormDataTypeFormForNewMessage>>
    =(props)=>{
    return(
        <form onSubmit={props.handleSubmit}>
             <Field name={"textForNewMessage"}
                    component={"textarea"} >

             </Field>
            <button >сообщение</button>
        </form>

)

}
export const ReduxFormForNewMessage=  reduxForm<FormDataTypeFormForNewMessage>({
    form: 'new message' // a unique name for this form
})(FormForNewMessage);