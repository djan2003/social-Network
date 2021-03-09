import React from "react";
import s from "./Profile.module.css";
import Ava from "./Ava/Ava";
import MyPost from "./MyPost/MyPost";
import ItemNewPost from "./ItemNewPost/ItemNewPost";
import {newPostDataType} from "../../redux/stateType";
import {NewPostContainer1} from "./NewPost/NewPostContainer";
import {Status} from "./Status/Statuse";
import {StatusWithHook} from "./Status/statusWithHook";

type propsType={
    newPostData:Array<newPostDataType>
    profile:any
    status:string
    updateStatus:(status:string)=>void

}

function Profile(props:propsType) {
    let newItemsText = props.newPostData.map(n=> <ItemNewPost postName={n.postName} likes={n.likes}/>)
    return (
        <div>
            <img className={s.img1}
                src="https://avatars.mds.yandex.net/get-pdb/1491599/1d3cac8b-2410-4c51-8abe-453d701707c1/orig"></img>
            <Ava profile={props.profile}/>
          {/*  <Status  updateStatus={props.updateStatus} status={props.status} />*/}
          <StatusWithHook updateStatus={props.updateStatus} status={props.status}  />
         <MyPost/>
         <NewPostContainer1/>
            <div>
                {newItemsText}
            </div>


        </div>
    )

}

export default Profile;