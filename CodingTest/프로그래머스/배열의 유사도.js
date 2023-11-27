function solution(s1, s2) {
    let res = [];
    s1.forEach((item)=>{
        let a = s2.filter((val)=>{
            if(val === item) return 1;
        });
        res.push(...a);
    })
    
    return res.length;
}
