let person = { student: true, age: 20 }

type Destructuring = {
   student : boolean,
   age : number
}

function 함수_destructuring({ student, age } :Destructuring) {
   console.log(student, age)
}
함수_destructuring({ student: true, age: 20 });



let maxNum = function(...inp :number[]){
   let res :number = 0;

   inp.forEach(function(item){
      if(res < item){
         res = item;
      }
   })
   
   return res;
}

console.log(maxNum(6, 20, 7, 2));



type InFo = {
   user : string,
   comment : number[],
   admin : boolean
}

function destructFunc({user, comment, admin} :InFo){
   console.log(user, comment, admin);
}
destructFunc( { user : 'kim', comment : [3,5,4], admin : false } )



function destructFunc2([inp1, inp2, inp3] :(number|string|boolean)[]){
   console.log(inp1, inp2, inp3);
}
destructFunc2([40, 'wine', false]);