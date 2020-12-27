import React from "react";
import s from "./Profile.module.css";
import Ava from "./Ava/Ava";
import MyPost from "./MyPost/MyPost";
import NewPost from "./NewPost/NewPost";
import ItemNewPost from "./ItemNewPost/ItemNewPost";

type newPostDataType ={
    id:number
    postName:string
    likes:number
}
let newPostData:newPostDataType[]=[
    {id:1,likes:11, postName:"Это первый пост"},
    {id:1,likes:12, postName:"Это второй пост"},
    {id:1,likes:1258, postName:"Это третий пост"},
]
let newItemsText = newPostData.map(n=> <ItemNewPost postName={n.postName} likes={n.likes}/>)
function Profile() {
    return (
        <div>
            <img className={s.img1}
                src="https://avatars.mds.yandex.net/get-pdb/1491599/1d3cac8b-2410-4c51-8abe-453d701707c1/orig"></img>
            <Ava/>
         <MyPost/>
         <NewPost/>


            <div>
                {newItemsText}

            </div>


        </div>
    )

}

export default Profile;