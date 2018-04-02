function Game(canvasId) {
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext("2d");
  
  this.background = new Background(this);
  this.player = new Player(this, 50, this.canvas.height / 2, "red");
  this.player2 = new Player(this, this.canvas.width - 50, this.canvas.height / 2, "green");
  this.totem = new Totem (this); 
}

//Starts the game
Game.prototype.start = function() {
  this.interval = setInterval(function(){
    this.clear();
    //this.moveAll(); <-- To use later
    this.draw();
    /* this.frameInterval++;

    if(this.frameInterval == 1000){
      this.frameInterval = 0;
    }
    if(this.frameInterval % 45 == 0) {
      this.generateObstacle();      
    }

    if(this.obstacleArray.length != 0){
      this.isCollision();
    } */
    

  }.bind(this), 1000/this.fps);
};

//Stops the game
Game.prototype.stop = function() {
  clearInterval(this.interval);
};

//Check collisions with walls/other players/item
Game.prototype.isCollision = function() {
  if (this.player.x < 0 + this.player.width) {
    
   }
};

Game.prototype.generateObstacle = function() {
  //Random obstacle ( walls ) generator
};

//Cleans whole screen to animate if necessary
Game.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

//Draws background and players
Game.prototype.draw = function(){
 this.background.draw();
 this.player.draw();
 this.player2.draw();
 this.totem.draw();
 };

Game.prototype.moveAll = function() {
  //this.background.move();
  //this.player.move();
  //this.obstacle.move();
};