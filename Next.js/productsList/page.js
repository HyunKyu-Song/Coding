import AlertBox from "./AlertBox";
import OrderBtn from "./OrderBtn";

export default function ProductsList() {

   let product = [
      {
         id : 0,
         name: '비비고왕교자만두',
         price: 8800,
         tag: ['식료품', '냉동식품', '만두']
      },
      {
         id : 1,
         name: '바나나',
         price: 5000,
         tag: ['식료품', '과일']
      },
      {
         id : 2,
         name: '삼다수',
         price: 500,
         tag: ['생필품', '물']
      },
      {
         id : 3,
         name: '신라면',
         price: 850,
         tag: ['식료품', '라면']
      },
      {
         id : 4,
         name: '연세우유',
         price: 2000,
         tag: ['유제품', '우유']
      }];

   return (
      <>
         <div className="상품-container">
            {/* <AlertBox/> */}
            {
               product.map(function (item, i) {
                  return (
                     <div className="상품" key={i}>
                        <img src={`/${item.name}.jpg`} alt={`${item.name}`}></img>
                        {
                           item.tag.map(function (a, j) {
                              return (
                                 <span className="tag" key={j}>{a}</span>
                              )
                           })
                        }
                        <p className="name">{item.name}</p>
                        <p className="price">가격: {item.price}원</p>
                        <OrderBtn i={i} product={item}/>
                     </div>
                  )
               })
            }
         </div>
      </>
   )
}