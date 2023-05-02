interface Obj2Type {
   [key: string]: string | number;
}

let obj2: Obj2Type = {
   model: 'k5',
   brand: 'kia',
   price: 6000,
   year: 2030,
   date: '6월',
   percent: '5%',
   dealer: '김차장',
}



interface Obj3Type {
   [key : string] : Obj3Type | number;
}

let obj3 :Obj3Type = {
   'font-size': 10,
   'secondary': {
      'font-size': 12,
      'third': {
         'font-size': 14
      }
   }
}