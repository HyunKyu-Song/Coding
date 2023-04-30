// class UserInfo{
//    name :string;
//    private lastName :string = 'Song';

//    constructor(name){
//       this.name = `${this.lastName} ${name}`;
//    }

//    lastNameChange(inp :string){
//       this.lastName = inp;
//    }
// }

// let user1 = new UserInfo('hyeonkyu');
// console.log(user1)
// user1.lastNameChange('Kim');
// console.log(user1)


// class UserInfo{
//    name :string;
//    protected lastName :string = 'Song';

//    constructor(name :string){
//       this.name = `${this.lastName} ${name}`;
//    }
// }

// class UserInfo2 extends UserInfo{
//    func( ){
//       this.lastName = 'Kim';	// lastName이 private였으면 사용 못 함
//    }
// }

// let apple1 = new UserInfo('apple');
// let apple = new UserInfo2('park');




class UserInfo3 {
   private static x = 10;
   public static y = 20;

   static addOne(inp: number) {
      UserInfo3.x += inp;
   }
   static printX() {
      console.log(UserInfo3.x);
   }
}

UserInfo3.addOne(3)
UserInfo3.addOne(4)
UserInfo3.printX()




class Square2 {
   width :number;
   height :number;
   color :string;

   constructor(width: number, height: number, color: string){
      this.width = width;
      this.height = height;
      this.color = color;
   }

   draw() {
      var w = Math.floor(Math.random() * 400);
      var h = Math.floor(Math.random() * 400);
      var box = `<div style="position:absolute; top:${w}px; left:${h}px; width: ${this.width}px; height: ${this.height}px; background-color: ${this.color};"></div>`;
      var aaa = document.querySelector('.boxContainer');
      aaa?.insertAdjacentHTML('beforeend', box);
   }
}

let 네모 = new Square2(30, 30, 'coral');
네모.draw()
네모.draw()
네모.draw()
네모.draw()
네모.draw()
네모.draw()
네모.draw()
네모.draw()