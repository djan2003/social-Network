import React from "react";
import s from "./Profile.module.css";
import Ava from "./Ava/Ava";
import MyPost from "./MyPost/MyPost";
import NewPost from "./NewPost/NewPost";
import ItemNewPost from "./ItemNewPost/ItemNewPost";
import {newPostDataType} from "../../redux/stateType";
import {chageTextForPost} from "../../redux/state";
import App from "../../App";

type propsType={
    chageTextForPost:(newText:string)=>void
    newPostData:Array<newPostDataType>
    addPost:(newPostText:string)=>void
    newPostText:string
}

function Profile(props:propsType) {
    let newItemsText = props.newPostData.map(n=> <ItemNewPost postName={n.postName} likes={n.likes}/>)
    return (
        <div>
            <img className={s.img1}
                src="https://avatars.mds.yandex.net/get-pdb/1491599/1d3cac8b-2410-4c51-8abe-453d701707c1/orig"></img>
            <Ava/>
         <MyPost/>
         <NewPost
             chageTextForPost={chageTextForPost}
             newPostText={props.newPostText}
             addPost={props.addPost}/>
            <div>
                {newItemsText}
            </div>


        </div>
    )

}

export default Profile;