function Totem() {
  this.game = game;
  
  this.x = Math.floor(Math.random());
  this.y = Math.floor(Math.random());
  
  this.heigth = HH;
  this.width = WW;
}

//Loads totem image in a random place ( area to be determined )
Totem.prototype.draw = function() {
  this.game.ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
};