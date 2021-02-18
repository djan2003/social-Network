import React from "react";
import s from "./Profile.module.css";
import Ava from "./Ava/Ava";
import MyPost from "./MyPost/MyPost";
import ItemNewPost from "./ItemNewPost/ItemNewPost";
import {newPostDataType} from "../../redux/stateType";
import {StoreType} from "../../redux/redux-store";
import {NewPostContainer1} from "./NewPost/NewPostContainer";

type propsType={
    newPostData:Array<newPostDataType>
    profile:any

}

function Profile(props:propsType) {
    let newItemsText = props.newPostData.map(n=> <ItemNewPost postName={n.postName} likes={n.likes}/>)
    return (
        <div>
            <img className={s.img1}
                src="https://avatars.mds.yandex.net/get-pdb/1491599/1d3cac8b-2410-4c51-8abe-453d701707c1/orig"></img>
            <Ava profile={props.profile}/>
         <MyPost/>
         <NewPostContainer1/>
            <div>
                {newItemsText}
            </div>


        </div>
    )

}

export default Profile;