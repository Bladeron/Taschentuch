function Player(game,x, y, color) {
  this.game = game;
  
  this.r = 25;
  this.x = 50;
  this.y = this.game.canvas.height / 2;
  
  this.vx = 10;
  this.vy = 10;
  
  //this.gravity = 0.15;
  
  this.setListeners();
}

//Keys to move player 1
Player.prototype.setListeners = function() {
  document.onkeydown = function(event) {
    switch( event.keyCode) {
      case 38: // Up
        this.y -= this.vy;
        break;
      case 40: // Down
         this.y += this.vy;
         break;
      case 37: // left
        this.x -= this.vx;
        break;
      case 39: // right
        this.x += this.vx;
        break;
      }
  }.bind(this);
};

//A ball as a placeholder
Player.prototype.draw = function() { 
  this.game.ctx.beginPath();
  this.game.ctx.fillStyle="red";
  this.game.ctx.strokeStyle="black";
  this.game.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
  this.game.ctx.fill();
  this.game.ctx.stroke();
  this.game.ctx.closePath();

  //this.animateImg();
};

//Trick to sync frames if players finally have an animation
Player.prototype.animateImg = function() {
/* if(this.game.frameInterval % 6 == 0){

  if(this.img.frameIndex<2){
    this.img.frameIndex++;
  }else{
    this.img.frameIndex=0;
  }
} */
};

Player.prototype.move = function() { 
};