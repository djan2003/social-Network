import React from "react";

type itemsForDialogTypeProps={
    text:string
}

const ItemsForDialog = (props:itemsForDialogTypeProps)=>{
    return(
        <div>{props.text}</div>

    )
}
export default ItemsForDialog;