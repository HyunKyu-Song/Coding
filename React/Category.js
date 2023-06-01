/*eslint-disable*/
import { Route, Routes, useNavigate, useParams } from 'react-router-dom';



function Category() {
   let navigate = useNavigate();
   let {id} = useParams();
   return (
      <>
         <ul>
            <li onClick={() => { navigate('/peopleQuiz/men') }}>남자 연예인</li>
            <li>여자 연예인</li>
            <li>남여 연예인</li>
         </ul>
         <h2>{id}</h2>
      </>
   )
}

export default Category;