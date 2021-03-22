import React from "react";

export const reguiredField = (value:any)=>{
   if(!value) return "поле нужно заполнить"
    return  undefined
}

export const maxLengthCreator = (maxLength:number) => (value:any) => {
    if (value&&value.length > maxLength) return `Max length is ${maxLength} symbols`;
    return undefined;
}
