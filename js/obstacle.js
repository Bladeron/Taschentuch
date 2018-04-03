function Obstacle(game,x,y) {
  this.game = game;
  
  this.x = x;
  this.y = y;

  this.w = 40;
  this.h = Math.floor(Math.random()* (250-100)+50);

  this.wv = 100;
  this.hv = 40;

}

//Obstacles form placeholder
Obstacle.prototype.draw = function() {
  this.game.ctx.fillStyle = "blue";
  this.game.ctx.fillRect(this.x, this.y, this.w, this.h);

  this.game.ctx.fillStyle = "red";
  this.game.ctx.fillRect(100, 150, this.wv, this.hv);

 /* this.game.ctx.fillStyle = "blue";
  this.game.ctx.fillRect(1000, 500, 200, 40);
 */
};