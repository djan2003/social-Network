import React from "react";

import {AddPostAC, ChageTextForPostAC} from "../../../redux/ProfilePageReducer";
import NewPost from "./NewPost";
import {StoreType} from "../../../redux/redux-store";

type propsType={
    store:StoreType
}



function NewPostContainer(props:propsType) {
    const changeTextForPost=(text:any)=>{
        let action = ChageTextForPostAC(text)
        props.store.dispatch(action)
    }
    const addPost = (text:any)=>{
        let action=AddPostAC(text)
            props.store.dispatch(action)

    }
return(
   <NewPost newPostText={props.store.getState().profilePageReduser.newPostText}
            changeTextForPost={changeTextForPost}
            addPost={addPost}

   />
)
}
export default NewPostContainer;