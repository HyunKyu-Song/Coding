function func(input) {
    // console.log(typeof input[0]);
    // console.log(input);
    var a = [];
    input.forEach(function (item) {
        if (typeof item != 'number') {
            item = parseInt(item);
        }
        a.push(item);
    });
    return a;
}
var res = func(['1', 2, '3']);
var 철수쌤 = { subject: 'math' };
var 영희쌤 = { subject: ['science', 'english'] };
var 민수쌤 = { subject: ['science', 'art', 'korean'] };
var player = {
    name: 'song'
};
//player.name = 'kim'
