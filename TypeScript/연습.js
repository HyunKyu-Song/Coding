var newjeans = ['민지', '하니', '다니엘', '해린', '혜인'];
var 나이 = [20, 20, 19, 18, 16, 'apple'];
var 뉴진스 = {
    멤버: ['minji', 'hanni', 'danielle', 'haerin', 'hyein'],
    age: [20, 20, 19, 18, 16]
};
var project = {
    member: ['kim', 'park'],
    days: 30,
    started: true,
};
var 학교 = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John'
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];
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
var aa = document.querySelector('.title');
if (aa instanceof Element) {
    aa.innerHTML = 'haha';
}
// document.querySelector('.title')?.innerHTML = 'ahahaha';
// document.querySelector('.link').style.color = 'red';
var bb = document.querySelector('.link');
if (bb instanceof HTMLAnchorElement) {
    bb.style.color = 'coral';
}
var obj1 = {
    name: 'song',
    age: 20,
    first: 'hello'
};
var obj2 = {
    name: 'kim',
    age: 21,
    birth: 98
};
// console.log(obj1)
// console.log(obj2)
function func3() {
    var inp = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        inp[_i] = arguments[_i];
    }
    console.log(inp);
}
func3(1, 2, 3, 4, 5);
