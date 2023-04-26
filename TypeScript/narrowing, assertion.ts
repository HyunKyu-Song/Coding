function func(input: (string | number)[]) {
   // console.log(typeof input[0]);
   // console.log(input);
   var a: number[] = [];

   input.forEach(function (item) {
      if (typeof item != 'number') {
         item = parseInt(item);
      }
      a.push(item);
   })

   return a;
}
var res = func(['1', 2, '3']);


type Aa = { subject: string | string[] };

let 철수쌤: Aa = { subject: 'math' }
let 영희쌤: Aa = { subject: ['science', 'english'] }
let 민수쌤: Aa = { subject: ['science', 'art', 'korean'] }



type PlayerName = {
   readonly name: string
}
const player: PlayerName = {
   name: 'song'
}
//player.name = 'kim'