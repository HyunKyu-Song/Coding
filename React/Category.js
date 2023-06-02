/*eslint-disable*/
import axios from 'axios';
import { Route, Routes, useNavigate, useParams } from 'react-router-dom';



function Category(props) {
   let navigate = useNavigate();
   let { id } = useParams();

   return (
      <>
         <ul className='menu-container'>
            <li onClick={() => {
               navigate('/peopleQuiz/men');
               axios('https://hyunkyu-song.github.io/game/quizData.json')
               .then(res => {
                  console.log(res.data);
                  props.setData(res.data);
                  props.setShowArrow('show ')
               })
            }}>남자 연예인</li>
            <li>여자 연예인</li>
            <li>남여 연예인</li>
         </ul>
         <h2>{id}</h2>
      </>
   )
}

export default Category;