import React from "react";
import {Field, reduxForm} from "redux-form";
import {InjectedFormProps} from "redux-form/lib/reduxForm";
import {maxLengthCreator, reguiredField} from '../../../utilites/helper';
import {TextareaForForm} from "../../../common/TexareaForForm";

export type FormDataTypeForNewPost = {
    textForNewPost: string
}
let maxLength15 = maxLengthCreator(15)
export const FormForNewPost: React.FC<InjectedFormProps<FormDataTypeForNewPost>>
    = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"textForNewPost"}
                       component={TextareaForForm}
                       validate={[reguiredField, maxLength15]}
                ></Field>
            </div>
            <div>
                <button>Add Post</button>
            </div>

        </form>
    )
}

export const ReduxFormForNewPost = reduxForm<FormDataTypeForNewPost>({
    form: 'new post' // a unique name for this form
})(FormForNewPost);