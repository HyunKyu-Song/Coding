let example1: string = 'Song';

let example2: number[] = [1, 2, 3, 4];

let example3: { age: number } = { age: 10 };

let example4: string | boolean = true;

type A = string | number;
let example5: A = 'apple';

function example6(inp: number): number {
   return inp + 2;
}
//console.log(example6(5)) //7이 출력됨

type B = [string, number];
let example7: B = ['first', 10];

class User {
   name: string
   constructor(name: string) {
      this.name = name;
   }
}




let MyName: string = 'song';

type My = {
   name?: string,
   age?: number,
   area?: string
}

let 나: My = {
   name: 'song',
   age: 10,
   area: 'korea'
}




let singer: { name: string, song: string } = { name: 'NewJeans', song: 'OMG' }




let project: { member: string[], days: number, started: boolean } = {
   member: ['kim', 'park'],
   days: 30,
   started: true,
}




let user: string = 'kim';
let age: number | undefined = undefined;
let married: boolean = false;
let 철수: (string | number | undefined | boolean)[] = [user, age, married];



let 학교: { score: (number | boolean)[], teacher: string, friend: string[] | string } = {
   score: [100, 97, 84],
   teacher: 'Phil',
   friend: 'John'
}
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher]



function func1(inp? :string) :string{
   if(typeof(inp) == 'string')
      return `안녕하세요 ${inp}`;
   else
      return '이름이 없습니다';
}



function func2(inp :number | string) :number{
   if(typeof(inp) == 'number'){
      return (inp.toString).length;
   }
   else
      return inp.length;
}



function func3(월소득 :number, 집보유여부 :boolean, 매력점수 :string) :string | void{
   let sum :number = 0;

   sum += 월소득;

   if(집보유여부 == true) sum+=500;

   if(매력점수 == '상') sum += 100;
   
   if(sum >= 600) return '결혼가능';
}