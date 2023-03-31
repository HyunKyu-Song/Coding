/*eslint-disable*/
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav, Container, Navbar, Alert } from 'react-bootstrap';
import { flushSync } from "react-dom";
import { useDispatch } from "react-redux";
import { addGoods } from "./../store.js";

function Detail(props) {
   let { group, id, groupid } = useParams();
   let [tab, setTab] = useState(0);
   let [fade, setFade] = useState('');
   let dispatch = useDispatch();
   let [alert, setAlert] = useState(false);

   useEffect(() => {
      setFade('show');
   }, [])
   // let [a] = useState(props.groupName[groupid][id].name);
   // let [b] = useState(props.groupName[groupid][id].birth);
   // let [c] = useState(props.groupName[groupid][id].from);
   // let [d] = useState(props.groupName[groupid][id].MBTI);
   // console.log(`name = ${a}`)
   // console.log(`birth = ${b}`)
   // console.log(`from = ${c}`)
   // console.log(`MBTI = ${d}`)

   // console.log(`group = ${group}`)
   // console.log(`id = ${id}`)
   // console.log(`groupid = ${groupid}`)
   // console.log(`tab = ${tab}`);

   useEffect(()=>{
      setTimeout(()=>{
         setAlert(false);
      }, 3000)
   }, [alert])

   return (
      <>
         <div className={`container hide ${fade}`}>
            {
               alert === true ? <Alert variant='warning' className="text-center">
                  장바구니에 추가되었습니다!
               </Alert> : null
            }
            <div className="row m-5">
               <div className="col-md-6">
                  <img src={`https://hyunkyu-song.github.io/GoodsShop/${group}/${props.groupName[groupid][id].name}.jpg`} width="70%" />
                  {/* <img src={`https://hyunkyu-song.github.io/GoodsShop/LESSERAFIM/${props.lesserafim[id].name}.jpg`} width="70%" /> */}
               </div>
               <div className="col-md-6">
                  <h4 className="pt-5">{props.groupName[groupid][id].name} Photo Card</h4>
                  <p>{props.groupName[groupid][id].birth}</p>
                  <p>{props.groupName[groupid][id].from}</p>
                  <p>{props.groupName[groupid][id].MBTI}</p>
                  <button onClick={() => {
                     setAlert(true);
                     dispatch(addGoods(
                        {
                           id: props.groupName[groupid][id].id,
                           name: props.groupName[groupid][id].name + ' Photo Card',
                           count: 0
                        }
                     ));
                  }} className="btn btn-danger">장바구니 추가</button>
               </div>

               <Nav className="mt-4" variant="tabs" defaultActiveKey="link0">
                  <Nav.Item>
                     <Nav.Link onClick={() => {
                        setTab(0);
                     }} eventKey="link0">버튼0</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                     <Nav.Link onClick={() => { setTab(1); }} eventKey="link1">버튼1</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                     <Nav.Link onClick={() => { setTab(2); }} eventKey="link2">버튼2</Nav.Link>
                  </Nav.Item>
               </Nav>
               <TabButton tab={tab} setTab={setTab} />
            </div>
         </div>

      </>
   )
}

function TabButton(props) {
   let [fade2, setFade2] = useState('');

   useEffect(() => {
      setTimeout(() => {
         setFade2('show');
      }, 10)

      return (() => {
         setFade2('');
      })

   }, [props.tab]);


   if (props.tab === 0) {
      return <div className={`hide ${fade2}`}>내용0</div>
   }
   else if (props.tab === 1) {
      return <div className={`hide ${fade2}`}>내용1</div>;
   }
   else if (props.tab === 2) {
      return <div className={`hide ${fade2}`}>내용2</div>;
   }
}

export default Detail;