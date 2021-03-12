import React, {ChangeEvent} from "react";
import {diaologsDataType, messageDataType} from "../../redux/stateType";
import {
    addMessage
} from "../../redux/DialogsPageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {RootState} from "../../redux/redux-store";

type mapStateToPropsType={
    dialogsData:Array<diaologsDataType>
    messageData:Array<messageDataType>

}
type mapDispatchToPropsType= {
    addMessage: (text: string) => void

}
let mapStateToProps=(state:RootState):mapStateToPropsType=>{
    return{
        dialogsData:state.dialogsPageReduser.dialogsData,
        messageData:state.dialogsPageReduser.messageData,

    }

}


export const DialogContainer1=connect(mapStateToProps,{addMessage})
(Dialogs)
