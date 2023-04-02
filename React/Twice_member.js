/*eslint-disable*/
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

function Twice_member(props) {
   let navigate = useNavigate();

   return (
      <>
         <div className="col-md-4 text-center mt-5" key={props.i}>
            <img src={`https://hyunkyu-song.github.io/GoodsShop/Twice/${props.twice[props.i].name}.jpg`} style={{borderRadius:'20PX'}} width="80%" onClick={()=>{navigate(`/Twice/detail/${props.twice[0].group_id}/${props.i}`)}} />
            <h4>{props.twice[props.i].name}</h4>
         </div>
      </>
   )
}

export default Twice_member;