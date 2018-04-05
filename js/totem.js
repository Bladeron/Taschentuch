function Totem(game, img) {
  this.game = game;
  
  this.width = 35;
  this.height = 35;
  this.position = true;
  this.img = img;
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
    //this.game.ctx.fillRect(this.x - this.width/2,this.y - this.height/2,this.width,this.height);
    this.game.ctx.drawImage(this.img, this.x - this.width/2, this.y - this.height/2, this.width, this.height);
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
    //this.game.ctx.fillRect(this.x - this.width/2,this.y - this.height/2,this.width,this.height);
    this.game.ctx.drawImage(this.img, this.x - this.width/2, this.y - this.height/2, this.width, this.height);
    this.position = false;
}


Totem.prototype.colidesWith = function() {
   if (this.x - this.width/2 <= this.game.player.x + this.game.player.r &&
    this.x + this.width > this.game.player.x &&
    this.y - this.height/2 < this.game.player.y + this.game.player.r &&
    this.y + this.height > this.game.player.y ) { 
      //console.log("Impacto")
      this.game.player.score++
      this.game.audioPickup.play();
      
      //console.log(this.game.player.score)
      if(this.game.player.score == 6) {
        //console.log("Player 1 ha ganado")
        this.game.stop();
      } else {
      this.game.reset();
      }
      return;
   }
   
   if (this.x - this.width/2 <= this.game.player2.x + this.game.player2.r &&
    this.x + this.width > this.game.player2.x &&
    this.y - this.height/2 < this.game.player2.y + this.game.player2.r &&
    this.y + this.height > this.game.player2.y ) { 
      //console.log("Impacto")
      this.game.player2.score++
      this.game.audioPickup.play()
      //console.log(this.game.player2.score)
      if(this.game.player2.score == 6) {
        //console.log("Player 2 ha ganado")
        this.game.stop();
      } else {
      this.game.reset();
      }
      return;
   }
}