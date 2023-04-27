type func = (inp: string) => number;

let 함수: func = function (a) {
   console.log(a);
   return 10;
}

//함수('apple');



type playerInfo = {
   name: string,
   age: number,
   plusOne: (x: number) => number,
   changeName: () => void
}



type cutType = (inp: string) => string;

let 제로함수: cutType = function (inp) {
   let a: string = '';
   if (inp[0] == '0') {
      a = inp.slice(1, inp.length + 1);
      return a;
   }
   else
      return inp;
}
console.log(제로함수('012apple'));



let 삭제함수 = function (inp :string) :number{
   let a: string|number = '';
   a = inp.replace(/-/g, '');
   a = parseInt(a);

   return a;
}
console.log(삭제함수('123-548-684'));



type func1Type = (inp :string) => string;
type func2Type = (inp :string) => number;

function 숙제3(inp :string, func1 :func1Type, func2 :func2Type) :number{
   let res = func1(inp);

   return func2(res);
}
console.log(숙제3('010-1111-2222', 제로함수, 삭제함수));