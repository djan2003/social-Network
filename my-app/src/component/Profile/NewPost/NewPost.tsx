import React, {ChangeEvent} from "react";

type propsType={
    newPostText:string
    changeTextForPost: (text: string)=>void
    addPost:(text:string)=>void
}



function NewPost(props:propsType) {
    const onChangeHandler=(e:ChangeEvent<HTMLTextAreaElement>)=>{
        props.changeTextForPost(e.currentTarget.value)
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