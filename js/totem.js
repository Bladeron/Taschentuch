function Totem(game) {
  this.game = game;
  
  /* this.x = this.game.canvas.width/2; */
  this.x = Math.floor(Math.random()*(700-500+1)+500);
  this.y = Math.floor(Math.random()*(400-350+1)+350);
  
  this.width = 80;
  this.height = 80;
  this.r = 25;
  
  
  /* this.img = new Image();
  this.img.src = "img/totem.png"; */

  /* this.heigth = HH;
  this.width = WW; */
}

//Loads totem image in a random place ( area to be determined )
Totem.prototype.draw = function() { 

  this.game.ctx.fillRect(this.x - this.width/2,this.y - this.height/2,this.width,this.height);

  //this.animateImg();

};