import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import Dialog from "./Dialog/Dialog";
import ItemsForDialog from "./ItemsForDialog/ItemsForDialog";
import {diaologsDataType, messageDataType} from "../../redux/stateType";
import {ActionType} from "../../redux/state";
import {AddNewMessageAC, ChangetextForMessageAC} from "../../redux/DialogsPageReducer";
import {StoreType} from "../../redux/redux-store";
import Dialogs from "./Dialogs";

type PropsType={
    store:StoreType
    dialodsData: Array<diaologsDataType>
    messageData: Array<messageDataType>
    newMessageText:string
    dispatch:(action:ActionType)=>void
}

const DialogsContainer = (props:PropsType) => {
    const changetextForMessage=(text:any)=>{
        const action = ChangetextForMessageAC(text)
        props.store.dispatch(action)
    }
    const addMessage = (text:any)=>{
        const action=AddNewMessageAC(text)
            props.store.dispatch(action)
    }
    return (
       <Dialogs
           addMessage={addMessage}
           changetextForMessage={changetextForMessage}
           dialodsData={props.store.getState().dialogsPageReduser.dialodsData}
           messageData={props.store.getState().dialogsPageReduser.messageData}
           newMessageText={props.store.getState().dialogsPageReduser.newMessageText}
       />
    )
}
export default DialogsContainer;