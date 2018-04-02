function Obstacle(game) {
  this.game = game;

  
  this.x = 460;
  this.y = 300;

  this.w = 30;
  this.h = 300;

}

Obstacle.prototype.draw = function() {
  this.game.ctx.fillStyle = "blue";
  this.game.ctx.fillRect(this.x, this.y, this.w, this.h);
};