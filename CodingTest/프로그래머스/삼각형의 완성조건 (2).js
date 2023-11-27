function solution(arr) {
    arr.sort((x, y)=> x- y);
    
    let a = arr[1]-arr[0];
    let b = arr[0]+arr[1];
    
    return b-a-1;
}
