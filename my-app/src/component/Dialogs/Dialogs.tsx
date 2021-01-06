import React from "react";
import s from "./Dialogs.module.css"
import Dialog from "./Dialog/Dialog";
import ItemsForDialog from "./ItemsForDialog/ItemsForDialog";
import {diaologsDataType, messageDataType} from "../../redux/stateType";

type PropsType={
    dialodsData: Array<diaologsDataType>
    messageData: Array<messageDataType>
}

const Dialogs = (props:PropsType) => {
    let dialogsElement: Array<JSX.Element>= props.dialodsData.map(d=> <Dialog name={d.name} id={d.id}/> );
    let itemsElement:Array<JSX.Element> = props.messageData.map(m=><ItemsForDialog text={m.text}/>)

    // @ts-ignore
    return (
        <div className={s.dialogs}>
            <div className={s.names}>
                {dialogsElement}
            </div>
            <div className={s.items}>
                {itemsElement}
            </div>
        </div>
    )
}
export default Dialogs;