/*eslint-disable*/
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Menu() {
   let navigate = useNavigate();
   return (
      <menu className='menu-container'>
         <li onClick={() => {
            navigate('/peopleQuiz/category')
            // axios('https://hyunkyu-song.github.io/game/quizData.json')
            //    .then(res => {
            //       console.log(res.data);
            //       props.setData(res.data);
            //       props.setShowArrow('show ')
            //    })
         }}>인물퀴즈 글ver</li>
         <li>인물퀴즈 사진ver</li>
         <li>게임3</li>
         <li>게임4</li>
      </menu>
   )
}

export default Menu;