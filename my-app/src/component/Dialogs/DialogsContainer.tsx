import React, {ChangeEvent} from "react";
import {diaologsDataType, messageDataType} from "../../redux/stateType";
import {ActionType, stateType} from "../../redux/state";
import {AddNewMessageAC, ChangetextForMessageAC} from "../../redux/DialogsPageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

type mapStateToPropsType={
    dialodsData:diaologsDataType
    messageData:messageDataType
    newMessageText:string

}
type mapDispatchToPropsType= {
    addMessage: (text: string) => void
    changetextForMessage: (text: string) => void

}
let mapStateToProps=(state:any)=>{
    return{
        dialodsData:state.dialogsPageReduser.dialodsData,
        messageData:state.dialogsPageReduser.messageData,
        newMessageText:state.dialogsPageReduser.newMessageText

    }

}
let mapDispatchToProps=(dispatch:(action:ActionType)=>void)=>{
    return{
        changetextForMessage:(text:string)=>{
            dispatch(ChangetextForMessageAC(text))
        },
        addMessage:(text:string)=>{
            dispatch(AddNewMessageAC(text))
        }
    }
}

export const DialogContainer1=connect(mapStateToProps,mapDispatchToProps)(Dialogs)
