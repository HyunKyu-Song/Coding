let select_btn = document.querySelector('.select_btn');
let select_lang = document.querySelector('.select_lang');
let ko = document.querySelector('.ko');
let en = document.querySelector('.en');
let state_lang = document.querySelector('.state_lang');

select_btn.addEventListener('keydown', function (e) {

   if (e.key === ' ') {
      select_lang.classList.remove('hide_none');

      document.addEventListener('keydown', function (e) {
         const inpKeys = ['ArrowUp', 'ArrowDown', 'Enter'];

         if (inpKeys.includes(e.key)) {
            switch (e.key) {
               case 'ArrowUp':
                  ko.classList.remove('hide_hidden');
                  en.classList.add('hide_hidden');
                  state_lang.innerHTML = '한국어';
                  console.log('위로 이동');
                  break;
               case 'ArrowDown':
                  ko.classList.add('hide_hidden');
                  en.classList.remove('hide_hidden');
                  state_lang.innerHTML = 'English';
                  console.log('아래로 이동');
                  break;
               case 'Enter':
                  select_lang.classList.add('hide_none');
                  console.log('언어 선택');
                  break;
               default:
                  break;
            }
         }
      });
   }
})

select_btn.addEventListener('mouseup', function (e) {

   if (e.target.dataset.val === 'onOff') {
      select_lang.classList.remove('hide_none');

      document.querySelector('.lang_ko').addEventListener('mouseup', function (e) {
         ko.classList.remove('hide_hidden');
         en.classList.add('hide_hidden');
         state_lang.innerHTML = '한국어';
         select_lang.classList.add('hide_none');
         console.log('한국어');
      });
      document.querySelector('.lang_en').addEventListener('mouseup', function (e) {
         ko.classList.add('hide_hidden');
         en.classList.remove('hide_hidden');
         state_lang.innerHTML = 'English';
         select_lang.classList.add('hide_none');
         console.log('English');
      });
   }

})