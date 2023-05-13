export default async function Write() {
   return (
      <div className="write-container">
         <h2 className="write-title">글 작성</h2>
         <form action="/api/add" method="POST">
            <fieldset>
               <legend>작성</legend>
               <div>
                  <input type="text" id="title" name="title" placeholder="글제목"></input>
               </div>
               <div>
                  <input type="text" name="content" placeholder="내용"></input>
               </div>
               <div>
                  <input type="text" name="writer" placeholder="작성자"></input>
               </div>
               <button type="submit">전송</button>
            </fieldset>
         </form>
      </div>
   )
}
