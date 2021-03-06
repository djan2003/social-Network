import React from "react";

import {AddPostAC} from "../../../redux/ProfilePageReducer";
import NewPost from "./NewPost";
import {connect} from "react-redux";
import {ActionType} from "../../../redux/stateType";

let mapStateToProps = (state: any) => {
    return {
        newPostText: state.profilePageReduser.newPostText
    }

}
let mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return{
        addPost:(text:string)=>dispatch( AddPostAC(text))
    }

}
export const NewPostContainer1 = connect(mapStateToProps,mapDispatchToProps)(NewPost)