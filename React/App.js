/*eslint-disable*/
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Container, Navbar, Alert } from 'react-bootstrap';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Alert from 'react-bootstrap/Alert';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Detail from './component/Detail.js';
import Cart from './component/Cart.js';
import Twice_member from './component/Twice_member.js';
import Lesserafim_member from './component/Lesserafim_member.js';
import NewJeans_member from './component/NewJeans_member.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import styled from 'styled-components'
import { useQuery } from '@tanstack/react-query';
import Marquee from "react-fast-marquee";


function App() {
  let [twice, setTwice] = useState([]);
  let [lesserafim, setLesserafim] = useState([]);
  let [newjeans, setNewjeans] = useState([]);
  let [more, setMore] = useState(false);
  let navigate = useNavigate();
  let result = useQuery(['작명'], () => {
    return axios.get('https://codingapple1.github.io/userdata.json').then((res) => {
      console.log(res.data);
      return res.data;
      // res.data 성공
      // res.isLoading  로딩중
      // res.error  실패
    })
  })

  useEffect(() => {
    Promise.all([axios.get('https://hyunkyu-song.github.io/GoodsShop/LESSERAFIM/LESSERAFIM.json'), axios.get('https://hyunkyu-song.github.io/GoodsShop/NewJeans/NewJeans.json'), axios.get('https://hyunkyu-song.github.io/GoodsShop/Twice/Twice.json')])
      .then((result) => {
        let copy = [...result[0].data];
        setLesserafim(copy);

        let copy2 = [...result[1].data];
        setNewjeans(copy2);

        let copy3 = [...result[2].data];
        setTwice(copy3);
        // console.log(copy, copy2)
      })
      .catch(() => {
        console.log('promis fail');
      })
  }, [])

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand onClick={() => { navigate('/') }}>Goods Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/TWICE') }}>TWICE</Nav.Link>
            <Nav.Link onClick={() => { navigate('/LESSERAFIM') }}>LE SSERAFIM</Nav.Link>
            <Nav.Link onClick={() => { navigate('/NewJeans') }}>NewJeans</Nav.Link>
            <Nav.Link onClick={() => { navigate('/cart') }}>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={
          <>
            {/* <p>
              {result.isLoading && '로딩중'}
              {result.error && '에러남'}
              {result.data && result.data.name}
            </p>
            <h2>home</h2> */}
            {/* <h2 className='ment'>아이돌 굿즈샵</h2> */}
            <div className='main-bg'>
                <h2 className='ment text-center'>Idol Goods Shop</h2>
              <Marquee speed={100} gradientWidth={100}>
                <h2 className='moveMent text-center mt-4'></h2>
              </Marquee>
              <Marquee speed={130} gradientWidth={100}>
                <h2 className='moveMent text-center mt-4'>Twice, LE SSERAFIM, NewJeans</h2>
              </Marquee>
              {/* <Marquee speed={130} gradientWidth={100}>
                <h2 className='moveMent text-center mt-4'>NewJeans, Twice, LE SSERAFIM</h2>
              </Marquee> */}
              {/* <h2 className='ment text-center'>Idol Goods Shop</h2> */}
            </div>
          </>
        } />

        <Route path='/Twice' element={
          <div className="container mt-4">
            <div className="row" style={{ justifyContent: 'center' }}>
              {
                twice.map(function (item, i) {
                  return (<Twice_member twice={twice} i={i} />)
                })
              }
            </div>
          </div>
        } />

        <Route path='/LESSERAFIM' element={
          <div className="container mt-4">
            <div className="row" style={{ justifyContent: 'center' }}>
              {
                lesserafim.map(function (item, i) {
                  return (<Lesserafim_member lesserafim={lesserafim} i={i} />)
                })
              }
              <div></div>
              {
                more === true ?
                  lesserafim.map(function (item, i) {
                    return (
                      <>
                        <div className="col-md-4 text-center mt-5" key={i}>
                          <img src={`https://hyunkyu-song.github.io/GoodsShop/LESSERAFIM/${item.name}${i}.jpg`} style={{ borderRadius: '20PX' }} width="80%" />
                        </div>
                      </>
                    )
                  }) : null
              }
            </div>
            <div className='text-center my-4'>
              <button onClick={() => {
                setMore(true);
              }} className='btn btn-outline-dark'>더보기</button>
            </div>
          </div>
        } />

        <Route path='/NewJeans' element={
          <div className="container mt-4">
            <div className="row" style={{ justifyContent: 'center' }}>
              {
                newjeans.map(function (item, i) {
                  return (<NewJeans_member newjeans={newjeans} i={i} />)
                })
              }
            </div>
          </div>
        } />

        <Route path='/:group/detail/:groupid/:id' element={<Detail groupName={[lesserafim, newjeans, twice]} />} />

        <Route path='/cart' element={<Cart />} />

        <Route path="*" element={<div className='container'><h2 className='mt-5'>404 Error</h2></div>} />

      </Routes>
    </>
  );
}

export default App;