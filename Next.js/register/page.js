export default async function register() {
   return (
      <div className="signUp-container">
         <h2 className="signUp-title">회원가입</h2>
         <form action="/api/auth/signUp" method="POST" style={{textAlign:'center'}}>
            <fieldset>
               <legend>작성</legend>
               <div style={{marginTop:'20px'}}>
                  <input type="text" id="title" name="userId" placeholder="아이디"></input>
               </div>
               <div style={{marginTop:'10px'}}>
                  <input type="text" name="userPw" placeholder="비밀번호"></input>
               </div>
               <div style={{marginTop:'10px'}}>
                  <input type="text" name="userEmail" placeholder="이메일"></input>
               </div>
               <button type="submit" style={{marginTop:'20px'}}>회원가입</button>
            </fieldset>
         </form>
      </div>
   )
}
