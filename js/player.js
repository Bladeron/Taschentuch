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

//Keys to move both players not together :(
Player.prototype.setListeners = function() {
  document.onkeydown = function(event) {
    switch( event.keyCode) {
      case 38: // Up
       if (this.game.player.y <= 50) return;
        this.game.player.y -= this.vy;
        break;
      case 40: // Down
      if (this.game.player.y + 50 >= this.game.canvas.heigth) return;
        this.game.player.y += this.vy;
         break;
      case 37: // left
        if (this.game.player.x - 50 < 0) return;
        this.game.player.x -= this.vx;
        break;
      case 39: // right
        debugger;
        if (this.game.player.x + 50 >= this.game.canvas.width) return;
        this.game.player.x += this.vx;
        break;
      case 87:  //Up
       if (this.game.player2.y <= 50) return;
        this.game.player2.y -= this.vy;
        break;
      case 83:  //Down
       if (this.game.player2.y >= this.game.canvas.heigth) return;
        this.game.player2.y += this.vy;
        break;
      case 65:  //Left
       if (this.game.player2.x - 50 < 0) return;
        this.game.player2.x -= this.vy;
        break;
      case 68:  //Right
       if (this.game.player2.x + 50 >= this.game.canvas.width) return;
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