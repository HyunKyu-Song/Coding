var example1 = 'Song';
var example2 = [1, 2, 3, 4];
var example3 = { age: 10 };
var example4 = true;
var example5 = 'apple';
function example6(inp) {
    return inp + 2;
}
var example7 = ['first', 10];
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
var MyName = 'song';
var 나 = {
    name: 'song',
    age: 10,
    area: 'korea'
};
var singer = { name: 'NewJeans', song: 'OMG' };
var project = {
    member: ['kim', 'park'],
    days: 30,
    started: true,
};
var user = 'kim';
var age = undefined;
var married = false;
var 철수 = [user, age, married];
var 학교 = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John'
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];
function func1(inp) {
    if (typeof (inp) == 'string')
        return "\uC548\uB155\uD558\uC138\uC694 ".concat(inp);
    else
        return '이름이 없습니다';
}
function func2(inp) {
    if (typeof (inp) == 'number') {
        return (inp.toString).length;
    }
    else
        return inp.length;
}
function func3(월소득, 집보유여부, 매력점수) {
    var sum = 0;
    sum += 월소득;
    if (집보유여부 == true)
        sum += 500;
    if (매력점수 == '상')
        sum += 100;
    if (sum >= 600)
        return '결혼가능';
}
