/*eslint-disable*/
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  let [lessrafim, setLesserafim] = useState([]);

  useEffect(() => {
    axios.get('https://hyunkyu-song.github.io/GoodsShop/LESSERAFIM/LESSERAFIM.json')
      .then((result) => {
        console.log(result.data);
        let copy = [...result.data];
        setLesserafim(copy);
      })
      .catch(() => {
        console.log('fail');
      })
  }, [])

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Goods Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#pricing">TWICE</Nav.Link>
            <Nav.Link href="#features">LE SSERAFIM</Nav.Link>
            <Nav.Link href="#pricing">NewJeans</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* <div className="main-bg"></div> */}

      {/* <button className='btn btn-outline-warning m-5' onClick={() => {
        console.log(brr[1].name);
      }}>버튼</button> */}

      <div className="container mt-4">
        <div className="row">
          {
            lessrafim.map(function (item, i) {
              return (
                <Member lessrafim={lessrafim} i={i}/>
              )
            })
          }
        </div>
      </div>
    </>
  );
}

function Member(props) {
  return (
    <>
      <div className="col-md-4 text-center" key={props.i}>
        <img src={`https://hyunkyu-song.github.io/GoodsShop/LESSERAFIM/${props.lessrafim[props.i].name}.jpg`} width="80%" />
        <h4>{props.lessrafim[props.i].name}</h4>
        <p>{props.lessrafim[props.i].birth}</p>
        <p>{props.lessrafim[props.i].from}</p>
        <p>{props.lessrafim[props.i].MBTI}</p>
      </div>
    </>
  )
}

export default App;
