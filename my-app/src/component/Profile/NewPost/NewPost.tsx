import React, {ChangeEvent} from "react";
import {FormDataTypeForNewPost, FormForNewPost, ReduxFormForNewPost} from "./FormForNewPost";
import {FormDataType} from "../../Login/formForLogin";

type propsType={
    newPostText:string
    addPost:(text:string)=>void
}



function NewPost(props:propsType) {


    const onSubmit = (value:any)=>{
        props.addPost(value.textForNewPost)
    }
return(
    <>
        <ReduxFormForNewPost onSubmit={onSubmit}/>
    <div>New Posts</div>
    </>
)
}
export default NewPost;