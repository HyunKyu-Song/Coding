/*eslint-disable*/
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

function NewJeans_member(props) {
   let navigate = useNavigate();

   return (
      <>
         <div className="col-md-4 text-center mt-5" key={props.i}>
            <img src={`https://hyunkyu-song.github.io/GoodsShop/NewJeans/${props.newjeans[props.i].name}.jpg`} style={{borderRadius:'20PX'}} width="80%" onClick={()=>{navigate(`/NewJeans/detail/${props.newjeans[0].group_id}/${props.i}`)}} />
            <h4>{props.newjeans[props.i].name}</h4>
         </div>
      </>
   )
}

export default NewJeans_member;