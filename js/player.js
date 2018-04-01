function Player(game,x, y, color) {
  this.game = game;
  
  this.r = 25;
  this.x = x;
  this.y = y;
  this.color = color;
  this.score = 0;
  
  this.vx = 10;
  this.vy = 10;
  this.pressedKeys = [];
  //this.gravity = 0.15;
  
  this.setListeners();
}

//Keys to move player 1
Player.prototype.setListeners = function() {
  document.onkeydown = function(event) {
    switch( event.keyCode) {
      case 38: // Up
        this.game.player.y -= this.vy;
        break;
      case 40: // Down
        this.game.player.y += this.vy;
         break;
      case 37: // left
        this.game.player.x -= this.vx;
        break;
      case 39: // right
        this.game.player.x += this.vx;
        break;
      case 87:  //Up
        this.game.player2.y -= this.vy;
        break;
      case 83:  //Down
        this.game.player2.y += this.vy;
        break;
      case 65:  //Left
        this.game.player2.x -= this.vy;
        break;
      case 68:  //Right
        this.game.player2.x += this.vy;
        break;  
      }
  }.bind(this);
};


//A ball as a placeholder
Player.prototype.draw = function() { 
  this.game.ctx.beginPath();
  this.game.ctx.fillStyle = this.color;
  this.game.ctx.strokeStyle = "black";
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