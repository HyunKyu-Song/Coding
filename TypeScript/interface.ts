type Square = {
   color: string,
   width: number
}

let 사각형: Square = {
   color: 'black',
   width: 100
}


interface Student_interface {
   name: string,
}

interface Teacher_interface extends Student_interface {
   age: number
}

let 학생: Student_interface = {
   name: 'kim'
}

let 선생: Teacher_interface = {
   name: 'song',
   age: 20
}


interface Animal {
   name: string
}
interface Animal {
   age: number
}

let 토끼: Animal = {
   name: 'song',
   age: 12
}



interface Goods {
   brand: string;
   serialNumber: number;
   model: string[];
}
let 상품: Goods = { brand: 'Samsung', serialNumber: 1360, model: ['TV', 'phone'] }



interface CartInfo {
   product: string;
   price: number;
};
let 장바구니: CartInfo[] = [
   { product: '청소기', price: 7000 },
   { product: '삼다수', price: 800 }
]



interface Card extends CartInfo {
   card: boolean;
}



interface MathObj {
   plus: (a: number, b: number) => number,
   minus: (a: number, b: number) => number
}

let 오브젝트: MathObj = {
   plus(a, b) {
      return a + b
   },
   minus(a, b) {
      return a - b
   }
} 