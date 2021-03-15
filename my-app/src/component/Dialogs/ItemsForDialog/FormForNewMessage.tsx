import React from "react";
import {Field, reduxForm} from "redux-form";
import {InjectedFormProps} from "redux-form/lib/reduxForm";
import {FormDataTypeForNewPost} from "../../Profile/NewPost/FormForNewPost";
import {TextareaForForm} from "../../../common/TexareaForForm";
import {maxLengthCreator, reguiredField} from "../../../utilites/helper";

export type FormDataTypeFormForNewMessage = {
    textForNewMessage: string
}

const maxLength30 = maxLengthCreator(30)

export const FormForNewMessage: React.FC<InjectedFormProps<FormDataTypeFormForNewMessage>>
    = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"textForNewMessage"}
                       component={TextareaForForm}
                       validate={[reguiredField, maxLength30]}
                >

                </Field>
            </div>
            <div>
                <button>сообщение</button>
            </div>

        </form>

    )

}
export const ReduxFormForNewMessage = reduxForm<FormDataTypeFormForNewMessage>({
    form: 'textForNewMessage' // a unique name for this form
})(FormForNewMessage);