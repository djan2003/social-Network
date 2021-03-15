import React from "react";

export const reguiredField = (value:any)=>{
   if(!value) return "поле нужно заполнить"
    return  undefined
}

export const maxLengthCreator = (maxLength:number) => (value:any) => {
    if (value&&value.length > maxLength) return `Max length is ${maxLength} symbols`;
    return undefined;
}

/*
export const maxLengthCreator =(maxLength:any)=>(value:any)=>{
    let messageError = `максимум ${maxLength} символов`
   if(value&&value.length>maxLength) return messageError
     return undefined

}
*/