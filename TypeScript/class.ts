class Car {
   model: string;
   price: number;
   constructor(inp1: string, inp2: number) {
      this.model = inp1;
      this.price = inp2;
   }
   tax() {
      return this.price * 0.1;
   }
}
let car1 = new Car('소나타', 3000);

// console.log(car1)
// console.log(car1.tax())


type 숫자함수 = (inp: number[]) => number[];
type 문자함수 = (inp: string[]) => string[];

class Word {
   num: 숫자함수;
   str: 문자함수;
   constructor(...inp: (string | number)[]) {
      var a :number[]  = [];
      var b :string[] = [];

      this.num = function(inp){
         inp.forEach(function(item){
            console.log(`typeof item = ${typeof item}`);
            if(typeof item == 'number'){
               a.push(item);
            }
         })
         console.log(a);
         return a
      }
      this.str = function(inp){
         inp.forEach(function(item){
            if(typeof item == 'string'){
               b.push(item);
            }
         })
         console.log(b);
         return b
      }
   }
}

let obj = new Word('kim', 3, 5, 'park');
console.log(obj)
console.log(obj.num) //[3,5]
console.log(obj.str) //['kim', 'park']