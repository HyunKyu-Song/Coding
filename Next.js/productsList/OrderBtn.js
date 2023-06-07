'use client'

import { useDispatch, useSelector } from "react-redux";
import { AddAmount, AddProduct, OnOff } from "../GlobalRedux/store";
import AlertBox from "./AlertBox";

function OrderBtn(props) {
   let data = useSelector((state) => { return state });
   let dispatch = useDispatch();

   return (
      <>
      {
         data.alertBox == true ? <AlertBox /> : null
      }
         <div className="orderBtn">
            <button onClick={() => {
               dispatch(AddProduct(props.product))
               dispatch(AddAmount())
               dispatch(OnOff())
               setTimeout(()=>{
                  dispatch(OnOff())
               }, 1000)
            }} className="cartBtn">장바구니 담기</button>
            <button className="buyBtn">바로구매</button>
         </div>
      </>
   )
}

export default OrderBtn;