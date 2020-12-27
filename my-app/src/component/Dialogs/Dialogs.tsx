import React from "react";
import s from "./Dialogs.module.css"
import Dialog from "./Dialog/Dialog";
import ItemsForDialog from "./ItemsForDialog/ItemsForDialog";

type diaologsDataType={
name:string
    id:number
}
type messageDataType={
    text:string
    id:number
}
//{id:number, name:string}
let dialodsData:diaologsDataType[] =[
    {name:"Slava", id:1},
    {name:"Anna", id:2},
    {name:"Alina", id:3},
    {name:"Maksim", id:4},
    {name:"Svetlana", id:5},

]
let messageData:messageDataType[] =[
    {text:"Привет", id:1},
    {text:"Пока", id:2},
    {text:"АГА", id:3},

]


let dialogsElement: Array<JSX.Element>= dialodsData.map(d=> <Dialog name={d.name} id={d.id}/> );
let itemsElement:Array<JSX.Element> = messageData.map(m=><ItemsForDialog text={m.text}/>)



const Dialogs = () => {
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