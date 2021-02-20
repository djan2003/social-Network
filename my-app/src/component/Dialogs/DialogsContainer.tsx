import React, {ChangeEvent} from "react";
import {diaologsDataType, messageDataType} from "../../redux/stateType";
import {
    addMessage,
    changetextForMessage
} from "../../redux/DialogsPageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {RootState} from "../../redux/redux-store";

type mapStateToPropsType={
    dialogsData:Array<diaologsDataType>
    messageData:Array<messageDataType>
    newMessageText:string

}
type mapDispatchToPropsType= {
    addMessage: (text: string) => void
    changetextForMessage: (text: string) => void

}
let mapStateToProps=(state:RootState):mapStateToPropsType=>{
    return{
        dialogsData:state.dialogsPageReduser.dialodsData,
        messageData:state.dialogsPageReduser.messageData,
        newMessageText:state.dialogsPageReduser.newMessageText

    }

}


export const DialogContainer1=connect(mapStateToProps,{changetextForMessage,addMessage})(Dialogs)
