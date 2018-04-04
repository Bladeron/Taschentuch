function Player(game,x, y, color) {
  this.game = game;
  
  this.r = 15;
  this.x = x;
  this.y = y;
  this.color = color;
  this.score = 0;
  
  this.vx = 5;
  this.vy = 5;

  this.lastX = 0;
  this.lastY = 0;

  this.pressedKeys = [false, false, false, false]; //up, down, left, right
  //this.gravity = 0.15;
  
}

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
Player.prototype.move = function() { 
  if(this.pressedKeys[0] === true){
    if (this.y <= 50) return;
    this.lastY = this.y;
    this.lastX = this.x;
    this.y -= this.vy;
  }
 

  if(this.pressedKeys[1] === true){
  if (this.y + 50 >= this.game.canvas.height) return;
  this.lastY = this.y;
  this.lastX = this.x;
  this.y += this.vy;
  }

  if(this.pressedKeys[3] === true){
  if (this.x + 50 >= this.game.canvas.width) return;
  this.lastY = this.y;
  this.lastX = this.x;
  this.x += this.vx;
  }

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