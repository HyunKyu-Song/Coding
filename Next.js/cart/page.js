export default function Cart(props) {
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
         <h2 className="title">Cart</h2>
         {
            product.map(function(item, i){
               return(
                  <CartList product={product} item={item} i={i}/>
               )
            })
         }
      </div>
   )
}

function CartList(props) {
   return (
      <div className="cart-item">
         <p>{props.item.model}</p>
         <p>{props.item.price}</p>
         <p>1개</p>
      </div>
   )
}