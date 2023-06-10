let newjeans: string[] = ['민지', '하니', '다니엘', '해린', '혜인']

let 나이: (Number | string)[] = [20, 20, 19, 18, 16, 'apple']

let 뉴진스: { 멤버: string[], age: number[] } = {
   멤버: ['minji', 'hanni', 'danielle', 'haerin', 'hyein'],
   age: [20, 20, 19, 18, 16]
}

let project: { member: string[], days: number, started: boolean } = {
   member: ['kim', 'park'],
   days: 30,
   started: true,
}


let 학교: { score: (number | boolean)[], teacher: string, friend: string[] | string } = {
   score: [100, 97, 84],
   teacher: 'Phil',
   friend: 'John'
}
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher]

// function func1(x? :string) {
//    if(typeof x == 'undefined'){
//       console.log(`안녕하세요`);
//    }
//    else{
//       console.log(`안녕하세요 ${x}`);
//    }
// }
// func1('song')

// function func2(x : string|number){
//    console.log(x.toString().length)
// }
// func2('123234')


let aa = document.querySelector('.title');

if (aa instanceof Element) {
   aa.innerHTML = 'haha'
}

// document.querySelector('.title')?.innerHTML = 'ahahaha';

// document.querySelector('.link').style.color = 'red';

let bb = document.querySelector('.link');

if (bb instanceof HTMLAnchorElement) {
   bb.style.color = 'coral'
}

// let cc = document.querySelector('.btn');

// if (cc instanceof HTMLButtonElement) {
//    cc.addEventListener('click', function () {
//       if (bb instanceof HTMLAnchorElement) {
//          bb.style.color = 'blue'
//       }
//    })
// }

// document.querySelector('.btn')?.addEventListener('click', function (){
//    let dd = document.querySelector('.img');
//    if(dd instanceof HTMLImageElement){
//       dd.src = './hanni.jpg';
//    }
// })

interface A {
   name :string;
   age :number;
}

interface A{
   first? :string
}

let obj1 :A = {
   name : 'song',
   age : 20,
   first : 'hello'
}

interface B extends A{
   birth :number
}

let obj2 :B = {
   name :'kim',
   age: 21,
   birth :98
}

// console.log(obj1)
// console.log(obj2)


function func3(...inp :(number | string | boolean)[]){
   console.log(inp)
}

func3(1, 2, 3, 4, 5)