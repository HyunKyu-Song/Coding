interface PersonInfo {
   name: string;
   age: number;
}

type PersonInfoKey = keyof PersonInfo;
// name | age

let q: PersonInfoKey = 'name';




type Car5 = {
   color: boolean,
   model: boolean,
   price: boolean | number,
}

type Changer<T> = {
   [key in keyof T]: string;
}

type NewType2 = Changer<Car5>



type Bus = {
   color: string,
   model: boolean,
   price: number
}

type Changer2<T, T2> = {
   [key in keyof T] : T2;
}

type NewType3 = Changer2<Bus, number|string>;