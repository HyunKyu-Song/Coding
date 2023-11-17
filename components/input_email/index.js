let user_email_label = document.querySelector('.user_email_label');
let user_email = document.querySelector('.user_email');
let user_email_invalid = document.querySelector('.user_email_invalid');
let btn_arrow = document.querySelector('.btn_arrow');


user_email.addEventListener('focus', function () {
   user_email_label.classList.add('user_email_focus');
})


user_email.addEventListener('keyup', function (e) {
   const regexr = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

   if (regexr.exec(e.target.value)) {
      // 입력한 서식이 맞을 때, 잘못된 입력서식이라는 멘트 숨기기
      user_email_invalid.classList.remove('show');
      btn_arrow.classList.remove('btn_arrow_focus');
      user_email.classList.remove('user_email_focus_mobile');
   } else {
      if (e.target.value) {
         // 입력한 서식이 틀렸을 때, 입력한 값이 있을 때, 잘못된 입력서식이라는 멘트 보이기
         user_email_invalid.classList.add('show');
         user_email.classList.add('user_email_focus_mobile');
         btn_arrow.classList.add('btn_arrow_focus');
      } else {
         // 입력한 서식이 틀렸을 때, 입력한 값이 없을 때, 잘못된 입력서식이라는 멘트 숨기기
         user_email_invalid.classList.remove('show');
         btn_arrow.classList.remove('btn_arrow_focus');
         user_email.classList.remove('user_email_focus_mobile');
      }
   }
})