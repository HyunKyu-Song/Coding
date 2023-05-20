'use client'

export default function Error({error, reset}){
   return(
      <div>
         <h4>비상비상 에러발생~~~</h4>
         <button onClick={( )=>{ reset( ) }}>다시시도</button>
      </div>
   )
}