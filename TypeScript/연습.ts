let newjeans: string[] = ['민지', '하니', '다니엘', '해린', '혜인']

let 나이: (Number | string)[] = [20, 20, 19, 18, 16, 'apple']

let 뉴진스: { 멤버: string[], age: number[] } = {
   멤버: ['minji', 'hanni', 'danielle', 'haerin', 'hyein'],
   age: [20, 20, 19, 18, 16]
}

let project :{member:string[], days:number, started:boolean}= {
   member: ['kim', 'park'],
   days: 30,
   started: true,
}


let 학교 :{score:(number|boolean)[], teacher:string, friend:string[] | string} = {
   score : [100, 97, 84],
   teacher : 'Phil',
   friend : 'John'
}
학교.score[4] = false;
학교.friend = ['Lee' , 학교.teacher]

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


