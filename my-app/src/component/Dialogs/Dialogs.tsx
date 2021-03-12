import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import Dialog from "./Dialog/Dialog";
import ItemsForDialog from "./ItemsForDialog/ItemsForDialog";
import {diaologsDataType, messageDataType} from "../../redux/stateType";
import {FormDataTypeFormForNewMessage, ReduxFormForNewMessage} from "./ItemsForDialog/FormForNewMessage";
import {InjectedFormProps} from "redux-form/lib/reduxForm";


type PropsType={
    addMessage:(text:string)=>void
    dialogsData: Array<diaologsDataType>
    messageData: Array<messageDataType>
}

const Dialogs = (props:PropsType) => {
    let dialogsElement: Array<JSX.Element>= props.dialogsData.map(d=> <Dialog name={d.name} id={d.id}/> );
    let itemsElement:Array<JSX.Element> = props.messageData.map(m=><ItemsForDialog text={m.text}/>)


    const addMessage = (value:any)=>{
            props.addMessage(value.textForNewMessage)

    }
    return (
        <div className={s.dialogs}>
            <div className={s.names}>
                {dialogsElement}
            </div>
            <div className={s.items}>
                {itemsElement}
                <ReduxFormForNewMessage onSubmit={addMessage}/>

            </div>

        </div>
    )
}
export default Dialogs;