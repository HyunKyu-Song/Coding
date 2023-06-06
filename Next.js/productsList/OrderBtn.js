'use client'

import { useDispatch, useSelector } from "react-redux";
import { AddAmount, AddProduct } from "../GlobalRedux/store";

function OrderBtn(props) {
   let data = useSelector((state) => { return state });
   let dispatch = useDispatch();

   return (
      <div className="orderBtn">
         <button onClick={() => {
            dispatch(AddProduct(props.product))
            dispatch(AddAmount())
         }} className="cartBtn">장바구니 담기</button>
         <button className="buyBtn">바로구매</button>
      </div>
   )
}

export default OrderBtn;