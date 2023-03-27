/*eslint-disable*/
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Detail from './component/Detail.js';
import Lesserafim_member from './component/Lesserafim_member.js';
import NewJeans_member from './component/NewJeans_member.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import styled from 'styled-components'
import Alert from 'react-bootstrap/Alert';


function App() {
  let [lesserafim, setLesserafim] = useState([]);
  let [newjeans, setNewjeans] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    axios.get('https://hyunkyu-song.github.io/GoodsShop/LESSERAFIM/LESSERAFIM.json')
      .then((result) => {
        // console.log(result.data);
        let copy = [...result.data];
        setLesserafim(copy);
      })
      .catch(() => {
        console.log('fail');
      })

    axios.get('https://hyunkyu-song.github.io/GoodsShop/NewJeans/NewJeans.json')
      .then((result) => {
        // console.log(result.data);
        let copy = [...result.data];
        setNewjeans(copy);
      })
      .catch(() => {
        console.log('fail');
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
            <div className="row">
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
            <div className="row">
              {
                lesserafim.map(function (item, i) {
                  return (<Lesserafim_member lesserafim={lesserafim} i={i} />)
                })
              }
            </div>
          </div>
        } />

        <Route path='/NewJeans' element={
          <div className="container mt-4">
            <div className="row">
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