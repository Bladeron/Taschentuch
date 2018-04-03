function Player(game,x, y, color) {
  this.game = game;
  
  this.r = 25;
  this.x = x;
  this.y = y;
  this.color = color;
  this.score = 0;
  
  this.vx = 10;
  this.vy = 10;

  this.lastX = 0;
  this.lastY = 0;

  this.pressedKeys = [false, false, false, false]; //up, down, left, right
  //this.gravity = 0.15;
  
  /* this.setListeners(); */
}

//Keys to move both players not together :(
/* Player.prototype.setListeners = function() {
  document.onkeydown = function(event) {
    switch( event.keyCode) {
      case 38: // Up
        if(this.game.isCollision(this.game.player))
          this.moveUp(this.game.player);
        break;
      case 40: // Down
        if(this.game.isCollision(this.game.player))
          this.moveDown(this.game.player);
         break;
      case 37: // left
        if(this.game.isCollision(this.game.player))
          this.moveLeft(this.game.player);
        break;
      case 39: // right
        if(this.game.isCollision(this.game.player))
          this.moveRight(this.game.player);
        break;
      case 87:  //Up
        this.game.isCollision(this.game.player2);
        this.moveUp(this.game.player2);
        break;
      case 83:  //Down
        this.game.isCollision(this.game.player2);
        this.moveDown(this.game.player2);
        break;
      case 65:  //Left
        this.game.isCollision(this.game.player2);
        this.moveLeft(this.game.player2);
        break;
      case 68:  //Right
        this.game.isCollision(this.game.player2);
        this.moveRight(this.game.player2);
        break;  
      }
  }.bind(this);
}; */


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


//Movement functions
Player.prototype.moveUp = function() { 
  if(this.pressedKeys[0] === true){
    if (this.y <= 50) return;
    this.lastY = this.y;
    this.lastX = this.x;
    this.y -= this.vy;
  }
};  

Player.prototype.moveDown = function() { 
  if(this.pressedKeys[1] === true){
  if (this.y + 50 >= this.game.canvas.height) return;
  this.lastY = this.y;
  this.lastX = this.x;
  this.y += this.vy;
  }
};  

Player.prototype.moveRight = function() { 
  if(this.pressedKeys[3] === true){
  if (this.x + 50 >= this.game.canvas.width) return;
  this.lastY = this.y;
  this.lastX = this.x;
  this.x += this.vx;
  }
};  

Player.prototype.moveLeft = function() { 
  if(this.pressedKeys[2] === true){
  if (this.x - 50 < 0) return;
  this.lastY = this.y;
  this.lastX = this.x;  
  this.x -= this.vx;
  }
};  

Player.prototype.trueUp = function(){
  this.pressedKeys[0] = true;
}
Player.prototype.trueDown = function(){
  this.pressedKeys[1] = true;
}
Player.prototype.trueLeft = function(){
  this.pressedKeys[2] = true;
}
Player.prototype.trueRight = function(){
  this.pressedKeys[3] = true;
}
Player.prototype.falseUp = function(){
  this.pressedKeys[0] = false;
}
Player.prototype.falseDown = function(){
  this.pressedKeys[1] = false;
}
Player.prototype.falseLeft = function(){
  this.pressedKeys[2] = false;
}
Player.prototype.falseRight = function(){
  this.pressedKeys[3] = false;
}