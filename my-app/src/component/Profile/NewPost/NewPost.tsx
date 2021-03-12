import React from "react";
import { ReduxFormForNewPost} from "./FormForNewPost";

type propsType={
    newPostText:string
    addPost:(text:string)=>void
}

type valueType = {
    textForNewPost:string
}

function NewPost(props:propsType) {

    const onSubmit = (value:valueType)=>{
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