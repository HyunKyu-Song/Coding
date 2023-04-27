let 인사 = document.querySelector('.hello');

if (인사 != null)
   인사.innerHTML = '잘가세요';

let 사진 = document.querySelector('.img');

document.querySelector('.btn')?.addEventListener('click', function () {
   if(사진 instanceof HTMLImageElement)
   사진.src = './카즈하.jpg';
})



for(let i = 0; i < 3; i++){
   let 링크 = document.querySelectorAll('.naver')[i];

   if(링크 instanceof HTMLAnchorElement)
      링크.href = 'https://kakao.com';
}