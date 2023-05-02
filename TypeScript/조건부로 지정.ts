type Age<T> = T extends string ? string : unknown

let 나이 :Age<number> = 11;



type FirstItem<T> = T extends any[] ? T[0] : any 

let age1 :FirstItem<string[]>;
let age2 :FirstItem<number>; 



type Age1<T> = T extends [string, ...any] ? T[0] : unknown;

let age3 :Age1<[string, number]>;
let age4 :Age1<[boolean, number]>; 