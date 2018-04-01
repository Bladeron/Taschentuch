function Game(canvasId) {
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext("2d");
  
  this.background = new Background(this);
  this.player = new Player(this);
  this.player2 = new Player(this)
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
  /* if (this.player.x + this.player.width > this.obstacleArray[0].x && this.player.y > this.obstacleArray[0].y) {
   } */
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
 };

Game.prototype.moveAll = function() {
  //this.background.move();
  //this.player.move();
  //this.obstacle.move();
};