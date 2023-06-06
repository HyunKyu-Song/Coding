'use client'

import { useDispatch, useSelector } from "react-redux";
import { DecrementAmount, DeleteProduct, IncrementAmount } from "../GlobalRedux/store";

function Amount() {

   let data = useSelector((state) => { return state })
   let dispatch = useDispatch();

   return (
      <>
         {
            data.cartList.map(function (item, i) {
               return (
                  <>
                     <tr key={i}>
                        <td>{item.name}</td>
                        <td>{item.price * data.amount[i]}원</td>
                        <td>{data.amount[i]}</td>
                        <td>
                           <button onClick={() => {
                              if (data.amount[i] < 10) {
                                 dispatch(IncrementAmount(i))
                              }
                           }}>➕</button> <button onClick={() => {
                              if (data.amount[i] <= 1) {
                                 dispatch(DeleteProduct(i));
                              }
                              else{
                                 dispatch(DecrementAmount(i))
                              }
                           }}>➖</button></td>
                     </tr>
                  </>
               )
            })
         }
      </>
   )
}

export default Amount;