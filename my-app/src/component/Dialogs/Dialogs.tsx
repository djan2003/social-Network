import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import Dialog from "./Dialog/Dialog";
import ItemsForDialog from "./ItemsForDialog/ItemsForDialog";
import {diaologsDataType, messageDataType} from "../../redux/stateType";


type PropsType={
    addMessage:(text:string)=>void
    changetextForMessage:(text:string)=>void
    dialodsData: Array<diaologsDataType>
    messageData: Array<messageDataType>
    newMessageText:string
}

const Dialogs = (props:PropsType) => {
    let dialogsElement: Array<JSX.Element>= props.dialodsData.map(d=> <Dialog name={d.name} id={d.id}/> );
    let itemsElement:Array<JSX.Element> = props.messageData.map(m=><ItemsForDialog text={m.text}/>)
    const newMessageElement= React.createRef<HTMLTextAreaElement>();

    const onChangeHandler=(e:ChangeEvent<HTMLTextAreaElement>)=>{
        props.changetextForMessage(e.currentTarget.value)}
    const addMessage = ()=>{
        if (newMessageElement.current){
            props.addMessage(newMessageElement.current.value)
            newMessageElement.current.value=""
        }
    }
    return (
        <div className={s.dialogs}>
            <div className={s.names}>
                {dialogsElement}
            </div>
            <div className={s.items}>
                {itemsElement}
                <textarea onChange={onChangeHandler} ref={newMessageElement} value={props.newMessageText}></textarea>
                <button onClick={addMessage}>сообщение</button>
            </div>

        </div>
    )
}
export default Dialogs;