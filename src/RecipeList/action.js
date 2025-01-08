export const SUC="SUCCESS"
export const LOAD="LOADING"
export const FAIL ="FAILURE"

import axios from 'axios'

export function FetchData(dispatch){
    dispatch({type:"Loading",payloay:false});
    axios.get("http://localhost:3000/recipes")
    .then((res)=>{
        dispatch({type:SUC,payloay:res.data})
        console.log(res.data)
    }).catch((err)=>{
        dispatch({type:FAIL,payloay:true})
        console.log(err)
    })
       
}


