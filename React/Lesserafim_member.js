/*eslint-disable*/
import { useEffect, useState } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

function Lesserafim_member(props) {
   let navigate = useNavigate();

   return (
      <>
         <div className="col-md-4 text-center mt-5" key={props.i}>
            <img src={`https://hyunkyu-song.github.io/GoodsShop/LESSERAFIM/${props.lesserafim[props.i].name}.jpg`} style={{borderRadius:'20PX'}} width="80%" onClick={() => { navigate(`/LESSERAFIM/detail/${props.lesserafim[0].group_id}/${props.i}`) }} />
            <h4>{props.lesserafim[props.i].name}</h4>
         </div>
      </>
   )
}

export default Lesserafim_member;