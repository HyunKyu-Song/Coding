function solution(arr, h) {
    let res = arr.filter((item)=>{
        if(item > h) return 1;
    })
    
    return res.length;
}
