function Score(game) {
  this.game = game;
  
  this.x1 = 0;
  this.y1 = 0;
  
  this.x2 = 0;
  this.y2 = 0;  
}

//fillText(text, x, y [, maxWidth]);

Score.prototype.draw = function() {
  this.game.ctx.fillStyle = 'white'  
  this.game.ctx.font="20px verdana";
  this.game.ctx.fillText("Player 1: " +this.game.player.score ,10 ,20);

  this.game.ctx.fillText("Player 2: " +this.game.player2.score ,this.game.canvas.width -120 ,20);
}
