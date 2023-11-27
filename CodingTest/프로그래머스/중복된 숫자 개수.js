function solution(arr, n) {
    let arr2 = arr.filter((item)=>{
        if(item === n) return 1;
    })
    return arr2.length;
}
