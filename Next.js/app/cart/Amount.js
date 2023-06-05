'use client'

import { useState } from "react";

function Amount(props) {

   let [cnt, setCnt] = useState([0, 0, 0, 0, 0]);

   return (
      <>
         <td>{props.price * cnt[props.i]}원</td>
         <td>{cnt[props.i]}</td>
         <td><button onClick={()=>{
            if(cnt[props.i] < 10){
               let copy = [...cnt];
               copy[props.i] += 1;
               setCnt(copy)
            }
         }}>➕</button> <button onClick={()=>{
            if(cnt[props.i] > 0){
               let copy = [...cnt];
               copy[props.i] -= 1;
               setCnt(copy)
            }
         }}>➖</button></td>
      </>
   )
}

export default Amount;