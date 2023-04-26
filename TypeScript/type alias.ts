type Atype = {name : string};
type Btype = {name : string};

type Ctype =  Atype & Btype;

let a :Ctype = {name : 'song'}
console.log(a.name);



type NewType = {
   color? : string,
   size : number,
   readonly position : number[]
}



type Info = {
   name : string,
   phone : number,
   email : (string | number)[]
}



type Info2 = {
   name : string,
   phone : number,
   email : (string | number)[],
   adult : boolean
}