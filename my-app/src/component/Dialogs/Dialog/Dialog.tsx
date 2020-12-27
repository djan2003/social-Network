import React from "react";
import {NavLink} from "react-router-dom";

export type dialogsPropsType = {
    name: string
    id: number
}

const Dialog = (props: dialogsPropsType) => {
    return (
        <div><NavLink to={"/Dialogs/" + props.id}>{props.name}</NavLink></div>
    )
}
export default Dialog;