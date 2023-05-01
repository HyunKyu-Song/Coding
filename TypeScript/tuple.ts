let arr: [string, number, boolean] = ['버거킹', 10000, true];



type Arr = [string, number, ...boolean[]]
let arr2: Arr = ['동서녹차', 4000, true, false, true, true, false, true];



type TupleType = [string, boolean, ...(number | string)[]];
function tupleFunc(...inp: TupleType) {
   return inp;
}
let tupleA = tupleFunc('a', true, 6, 3, '1', 4);
//console.log(tupleA)



function tupleFunc2(...inp: [...(string | number)[]]) {
   let str: string[] = [];
   let num: number[] = [];
   inp.forEach(function (item) {
      if (typeof item == 'number') {
         num.push(item);
      }
      else {
         str.push(item);
      }
   })
   return [str, num];
}
let tupleB = tupleFunc2('b', 5, 6, 8, 'a');
console.log(tupleB);