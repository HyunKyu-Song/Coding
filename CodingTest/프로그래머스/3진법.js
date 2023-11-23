function solution(num) {
    let arr = [];
    let arr2 = [];
    let i = 0;
    let sum = 0;

    while(num != 0){
        arr.unshift((Math.floor(num % 3)));
        num = Math.floor(num / 3);
        i++;
    }

    arr.map((item, i)=>{
        sum += item * Math.pow(3, i)
    })

    return sum;
}
