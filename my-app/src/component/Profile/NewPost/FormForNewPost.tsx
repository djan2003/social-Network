import React from "react";
import {Field,reduxForm} from "redux-form";
import {InjectedFormProps} from "redux-form/lib/reduxForm";

export type FormDataTypeForNewPost ={
    textForNewPost:any
}
export const FormForNewPost:React.FC<InjectedFormProps<FormDataTypeForNewPost>> =(props:any)=>{
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"textForNewPost"}
                       component={"textarea"}
                       ></Field>
            </div>
            <div>
                <button>Add Post</button>
            </div>

        </form>
    )
}

export const ReduxFormForNewPost=  reduxForm<FormDataTypeForNewPost>({
    form: 'new post' // a unique name for this form
})(FormForNewPost);