'use client'

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"

export default function ModeBtn(props){
   let [mode, setMode] = useState(props.mode);
   let router = useRouter();

   useEffect(()=>{
      let 쿠키값 = `; ${document.cookie}`.split(`; mode=`).pop().split(';')[0];
      if(쿠키값 == ''){
         document.cookie = `mode=white; max-age=${3600*24*400}`;
      }
   }, [])

   return(
      <span onClick={()=>{
         let 쿠키값 = `; ${document.cookie}`.split(`; mode=`).pop().split(';')[0];

         if(쿠키값 == 'white'){
            setMode('🌙');
            document.cookie = `mode=dark; max-age=${3600*24*400}`;
         }
         else{
            setMode('🌞');
            document.cookie = `mode=white; max-age=${3600*24*400}`;
         }
         router.refresh();
         console.log(props.mode);
      }}>{mode}</span>
   )
}