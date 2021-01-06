import React from "react";

type propsType={
    addPost:(newPostText:string)=>void
}



function NewPost(props:propsType) {
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
        <textarea ref={newPostElement}></textarea>
        <button onClick={ addPost}>Add Post</button>
    </div>
    <div>New Posts</div>
    </>
)
}
export default NewPost;