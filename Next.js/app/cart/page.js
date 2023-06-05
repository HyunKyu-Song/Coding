import Amount from "./Amount";

export default function Cart() {
   let product = [
      {
         name: '비비고왕교자만두',
         price: 8800,
         amount: 3
      },
      {
         name: '바나나',
         price: 5000,
         amount: 1
      },
      {
         name: '삼다수',
         price: 500,
         amount: 30
      },
      {
         name: '신라면',
         price: 850,
         amount: 5
      },
      {
         name: '연세우유',
         price: 2000,
         amount: 2
      }];

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
                  {
                     product.map(function (item, i) {
                        return (
                           <>
                              <tr key={i}>
                                 <td>{item.name}</td>
                                 <Amount price={item.price} i={i} />
                              </tr>
                           </>
                        )
                     })
                  }
               </tbody>
            </table>
         </div>
      </>
   )
}