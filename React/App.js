/*eslint-disable*/
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Container, Navbar, Alert} from 'react-bootstrap';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Alert from 'react-bootstrap/Alert';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Detail from './component/Detail.js';
import Lesserafim_member from './component/Lesserafim_member.js';
import NewJeans_member from './component/NewJeans_member.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import styled from 'styled-components'


function App() {
  let [lesserafim, setLesserafim] = useState([]);
  let [newjeans, setNewjeans] = useState([]);
  let [more, setMore] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    Promise.all([axios.get('https://hyunkyu-song.github.io/GoodsShop/LESSERAFIM/LESSERAFIM.json'), axios.get('https://hyunkyu-song.github.io/GoodsShop/NewJeans/NewJeans.json')])
      .then((result) => {
        let copy = [...result[0].data];
        setLesserafim(copy);

        let copy2 = [...result[1].data];
        setNewjeans(copy2);
        console.log(copy, copy2)
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
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<><h2>home</h2></>
        } />

        <Route path='/TWICE' element={
          <div className="container mt-4">
            <div className="row" style={{ justifyContent: 'center' }}>
              {/* {
                lesserafim.map(function (item, i) {
                  return (<Lesserafim_member lesserafim={lesserafim} i={i} />)
                })
              } */}
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

        <Route path='/:group/detail/:groupid/:id' element={<Detail groupName={[lesserafim, newjeans]} />} />

        <Route path="*" element={<div className='container'><h2 className='mt-5'>404 Error</h2></div>} />

      </Routes>
    </>
  );
}

export default App;