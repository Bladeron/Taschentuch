function Obstacle(game,x,y, width, height) {
  this.game = game;
  
  this.x = x;
  this.y = y;

  this.w = width;
  this.h = height;

  this.wv = 100;
  this.hv = 40;

}

//Obstacles form placeholder
Obstacle.prototype.draw = function() {
  this.game.ctx.fillStyle = "blue";
  this.game.ctx.fillRect(this.x, this.y, this.w, this.h);

};