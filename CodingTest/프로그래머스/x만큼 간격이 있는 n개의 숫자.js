function solution(x, n) {
   var answer = [];
   var val = x;

   for (let i = 0; i < n; i++) {
      answer.push(x);
      x += val;
   }

   return answer;
}