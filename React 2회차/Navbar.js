import { useNavigate } from "react-router-dom";

export default function Navbar() {
   
   let navigate = useNavigate();

   return (
      <nav>
         <ul className='navbar'>
            <li onClick={() => { navigate('/') }}>Home</li>
            <li onClick={() => { navigate('/write') }}>Write</li>
            <li onClick={() => { navigate('/practice') }}>Practice</li>
         </ul>
      </nav>
   )
}