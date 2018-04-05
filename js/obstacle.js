function Obstacle(game,x,y, width, height, img) {
  this.game = game;
  
  this.x = x;
  this.y = y;

  this.w = width;
  this.h = height;

  this.wv = 100;
  this.hv = 40;

  this.img = img;

}

//Obstacles form placeholder
/* Obstacle.prototype.draw = function() {
  this.game.ctx.fillStyle = "blue";
  this.game.ctx.fillRect(this.x, this.y, this.w, this.h);
}; */


//void ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
Obstacle.prototype.draw = function() {
    
    this.game.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    //this.game.ctx.fillStyle = this.game.ctx.createPattern(this.img, "repeat");
    //this.game.ctx.fillRect(this.x, this.y, this.w, this.h);
  

}; 
