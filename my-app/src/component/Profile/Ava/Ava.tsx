import React from "react";
import userPhoto from "../../../accets/userPhoto.jpg"
type  PropsType={
    profile:any
}
function Ava(props:PropsType) {
    if(!props.profile){
       return <img src={userPhoto}/>
    }
return(
    <>
    <img src={!props.profile.photos?userPhoto:props.profile.photos.large}/>
    <div>Ava+description</div>
        </>
)
}
export default Ava;