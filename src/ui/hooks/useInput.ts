import {ChangeEvent, useState} from "react";


export const useInput = (initial:string)=>{
    const [value,setValue]=useState(initial)
   return{
        value,
       onChange: (e:ChangeEvent<HTMLInputElement>)=>setValue(e.currentTarget.value)
   }



}
