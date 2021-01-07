import React, {ChangeEvent} from "react";
import {chageTextForPost} from "../../../redux/state";

type propsType={
    addPost:(newPostText:string)=>void
    newPostText:string
    chageTextForPost:(newText:string)=>void
}



function NewPost(props:propsType) {
    const onChangeHandler=(e:ChangeEvent<HTMLTextAreaElement>)=>{
        props.chageTextForPost(e.currentTarget.value)
    }
    const newPostElement= React.createRef<HTMLTextAreaElement>();
    const addPost = ()=>{
        if (newPostElement.current){
        props.addPost(newPostElement.current.value)
        newPostElement.current.value=""
        }
    }
return(
    <>
    <div>
        <textarea ref={newPostElement} onChange={onChangeHandler} value={props.newPostText}></textarea>
        <button onClick={ addPost}>Add Post</button>
    </div>
    <div>New Posts</div>
    </>
)
}
export default NewPost;