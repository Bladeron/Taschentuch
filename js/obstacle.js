function Obstacle(game) {
  this.game = game;
  
  this.x = Math.floor(Math.random()*(1200-300+1)+500);
  this.y = Math.floor(Math.random()*(400-350+1)+350);

  this.w = 40;
  this.h = 300;

}

Obstacle.prototype.draw = function() {
  this.game.ctx.fillStyle = "blue";
  this.game.ctx.fillRect(this.x, this.y, this.w, this.h);

  /* this.game.ctx.fillStyle = "blue";
  this.game.ctx.fillRect(100, 150, 300, 40);

  this.game.ctx.fillStyle = "blue";
  this.game.ctx.fillRect(1000, 500, 200, 40);
 */
};