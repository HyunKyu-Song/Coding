/*eslint-disable*/

import { EditOutlined } from '@ant-design/icons';

export default function Home() {

   return (
      <div className="home-container">
         <h1 className='home-title'>ToDo App <EditOutlined /></h1>
         <div className='reason'>Don't put off until tomorrow what can be done today.</div>
         <div className='skill-container'>
            <h2 className='skill'>Skill</h2>
            <div className='skill-list'>
               <li><strong>Front: </strong>React</li>
               <li><strong>Server: </strong>Node.js</li>
               <li><strong>DB: </strong>MySQL</li>
               <li><strong>State Management: </strong>Zustand</li>
               <li><strong>UI Library: </strong>Ant Design 4.x</li>
            </div>
         </div>
      </div>
   )
}