// 미해결

function solution(n) {
    
    let str = "";
    let copy = "";
    let cnt = 0;
    
    n.forEach(item=>str += item);
    copy = str;
    
    while(1){
        if(str.split('1231') == str){
            break;
        }else{
            cnt++;
            str = str.split('1231').join('');
        }
    }
    
    return cnt;
}
