/*eslint-disable*/
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, plusCnt, minusCnt } from '../store.js';

function Cart() {
   let state = useSelector((state) => { return state });
   let dispatch = useDispatch();

   return (
      <>
         <Table className='container mt-4 text-center'>
            <thead>
               <tr>
                  <th>id</th>
                  <th>상품명</th>
                  <th>수량</th>
                  <th>추가</th>
               </tr>
            </thead>
            <tbody>
               {
                  state.stock.map(function (item, i) {
                     return (
                        <tr key={i}>
                           <td>{state.stock[i].id}</td>
                           <td>{state.stock[i].name}</td>
                           <td>{state.stock[i].count}</td>
                           <td><button onClick={()=>{
                              dispatch(plusCnt(i));
                           }} className='btn btn-outline-info'>+</button><button onClick={()=>{
                              dispatch(minusCnt(i));
                           }} className='btn btn-outline-danger mx-1'>-</button></td>
                        </tr>
                     )
                  })
               }
            </tbody>
         </Table>
      </>
   )
}

export default Cart;