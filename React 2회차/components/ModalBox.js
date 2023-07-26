export default function ModalBox(props) {
   return (
      <div className={`modalBox ${props.show}`}>
         <h4>{props.title[props.num]}</h4>
         <p>날짜</p>
         <p>상세내용!!!</p>
      </div>
   )
}