function genericFunc<funcType>(inp: funcType) {
   return inp;
}
let x = genericFunc<number>(10);
//console.log(x);



function genericFunc2<funcType2 extends number>(inp: funcType2) {
   return inp - 5;
}
let x2 = genericFunc2<number>(100);
//console.log(x2);



type lengthCheck = { length: number };

function genericFunc3<T extends lengthCheck>(inp: T) {
   return inp.length;
}
// console.log(genericFunc3<string>('hello'));
// console.log(genericFunc3<string[]>(['kim', 'park']));



interface Animal {
   name: string;
   age: number
}
let data = '{"name" : "dog", "age" : 1 }'

function genericFunc4<T2>(inp: string): T2 {
   return JSON.parse(inp);
}
let xx = genericFunc4<Animal>(data);
console.log(xx);



class Person<T3> {
   name :T3;
   constructor(aa :T3) {
      this.name = aa;
   }
}
let aa = new Person<string>('어쩌구');
aa.name //any 타입이 되었넹 