import React, {useState} from "react"

export const StatusWithHook = (props:any)=>{
     let [EditStatus,setEditStatus]=useState(false)
    const changeStatus=()=>{
        setEditStatus(!EditStatus)
    }
    const changeStatuseForeInpute = ()=>{
        setEditStatus(!EditStatus)
        props.updateStatus(changeTextStatus)
    }
    let [changeTextStatus, setChangeStatuse] =useState([props.status])
    const changeStatusForeSpane=(e:any)=>{
        setChangeStatuse(e.currentTarget.value)
    }

    return(
<div>
    {EditStatus
        ?<span onDoubleClick={changeStatus}>{changeTextStatus}</span>
        : <input onChange={changeStatusForeSpane} autoFocus={true}
                 onBlur={changeStatuseForeInpute} value={changeTextStatus}/>

    }


</div>
    )
}

