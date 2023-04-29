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

class Word {
   num: number[];
   str: string[];
   constructor(...inp: (string | number)[]) {
      var a :number[]  = [];
      var b :string[] = [];

      inp.forEach(function(item){
         if(typeof item == 'number'){
            a.push(item);
         }
         if(typeof item == 'string'){
            b.push(item);
         }
      })

      this.num = a;
      this.str = b;
   }
}

let obj = new Word('kim', 3, 5, 'park');
console.log(obj.num) //[3,5]
console.log(obj.str) //['kim', 'park']