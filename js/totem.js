function Totem(game) {
  this.game = game;
  
  this.width = 40;
  this.height = 40;
  this.position = true;
  /* this.img = new Image();
  this.img.src = "img/totem.png"; */

  /* this.heigth = HH;
  this.width = WW; */
}

//Loads totem image in a random place ( area to be determined )
Totem.prototype.draw = function() { 
 
  if (this.position) {
    this.canPlace()
  } else {
    this.game.ctx.fillRect(this.x - this.width/2,this.y - this.height/2,this.width,this.height);
  }

  //this.animateImg();

};

//Calculates if totem can be placed
Totem.prototype.canPlace = function() {
    this.x = Math.floor(Math.random()*(800-400)+400);
    this.y = Math.floor(Math.random()*(650-60)+60);

    for (var i=0; i<this.game.obstacleArray.length; i++) {
    
      if(
        this.x - this.width <= this.game.obstacleArray[i].x + this.game.obstacleArray[i].w &&
        this.x + this.width > this.game.obstacleArray[i].x &&
        this.y - this.height < this.game.obstacleArray[i].y + this.game.obstacleArray[i].h &&
        this.y + this.height > this.game.obstacleArray[i].y ) { 
          console.log("Totem collision");
          this.canPlace()
          
      }
     
    }
    this.game.ctx.fillRect(this.x - this.width/2,this.y - this.height/2,this.width,this.height);
    this.position = false;
}
