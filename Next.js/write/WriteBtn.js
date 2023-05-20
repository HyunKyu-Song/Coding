'use client'

export default function WriteBtn(props) {
   return (
      <>
         {
            props.session != null 
            ? <button type="submit">전송</button>
            : <button onClick={()=>{alert('로그인 후 댓글을 작성할 수 있습니다.');}} type="button">전송</button>
         }

      </>
   )
}
