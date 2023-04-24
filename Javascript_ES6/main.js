var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

dino = {
   x: 30,
   y: 100,
   width: 100,
   height: 100,
   draw() {
      ctx.fillStyle = 'green';
      ctx.fillRect(this.x, this.y, this.width, this.height);
   }
}
//dino.draw()


class Enemy {
   constructor() {
      this.x = 500;
      this.y = 150;
      this.width = 50;
      this.height = 50;
      this.draw = function () {
         ctx.fillStyle = 'red';
         ctx.fillRect(this.x, this.y, this.width, this.height);
      }
   }
}

var timmer = 0;
var 장애물들 = [];

function 프레임마다실행() {
   requestAnimationFrame(프레임마다실행);
   ctx.clearRect(0, 0, canvas.width, canvas.height);
   timmer++;

   if(timmer % 180 == 0){
      var 장애물 = new Enemy();
      장애물들.push(장애물);
   }
   
   장애물들.forEach(function(item){
      item.x--;
      item.draw()
   })
   dino.draw()
}

프레임마다실행();

