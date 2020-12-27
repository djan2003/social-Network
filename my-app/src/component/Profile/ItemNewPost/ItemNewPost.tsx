import React from "react";
import s from "./ItemNewPost.module.css"
type propsType={
    postName:string
    likes:number
}

function ItemNewPost(props:propsType) {
return(
    <>
        <img className={s.item} src="https://avatars.mds.yandex.net/get-pdb/933338/94068ff5-61aa-43bd-909a-a47aade07a8b/orig"/>
    <div>{props.postName}</div>
        <div>{props.likes}</div>
    </>
)
}
export default ItemNewPost;