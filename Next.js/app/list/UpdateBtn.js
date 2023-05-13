'use client'

import { useRouter } from "next/navigation";

export default function UpdateBtn(){
   let router = useRouter();

   return (
      <button onClick={()=>{
         
      }}>글 수정</button>
   )
}