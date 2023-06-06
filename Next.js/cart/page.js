import Amount from "./Amount";

export default function Cart() {
   
   return (
      <>
         <div className="장바구니-container">
            <div className="장바구니-title">
               장바구니 페이지
            </div>
            <table className="장바구니">
               <thead>
                  <tr>
                     <th>상품명</th>
                     <th>가격</th>
                     <th>수량</th>
                     <td></td>
                  </tr>
               </thead>
               <tbody>
                  <Amount />
               </tbody>
            </table>
         </div>
      </>
   )
}