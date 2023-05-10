/*eslint-disable*/

export default function List() {
   let product = [
      {
         model: '모니터',
         price: '187,100'
      },
      {
         model: '키보드',
         price: '31,790'
      },
      {
         model: '마우스',
         price: '24,900'
      },
   ];

   return (
      <div>
         <h2 className="title">상품목록</h2>
         <div className="goods-container">
            {
               product.map(function (item, i) {
                  return (
                     <div className="goods" key={i}>
                        <img src={`./${item.model}.jpg`} className="good-img"></img>
                        <h3>상품명: {item.model}</h3>
                        <h4>가격: {item.price}원</h4>
                     </div>
                  )
               })
            }
         </div>
      </div>
   )
}