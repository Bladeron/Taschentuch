function Game(canvasId) {
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext("2d");

  /* this.width = 1200;
  this.height = 700; */

  //Array to store obstacles
  this.obstacleArray = [];
  
  //Objects
  this.background = new Background(this);
  this.player = new Player(this, 50, this.canvas.height / 2, "red");
  this.player2 = new Player(this, this.canvas.width - 50, this.canvas.height / 2, "green");
  this.totem = new Totem (this); 
  this.obstacle = new Obstacle (this);
}

//Starts the game
Game.prototype.start = function() {
  this.interval = setInterval(function(){
    this.clear();
    this.draw();
    this.generateObstacle();
    

  }.bind(this), 1000/this.fps);
};

//Stops the game
Game.prototype.stop = function() {
  clearInterval(this.interval);
};

//Check collisions with walls/other players/item
Game.prototype.isCollision = function() {
  console.log("Is collision");
  /* if(this.player.x < this.obstacleArray[i].x &&
  this.player.x + this.player.width > this.obstacleArray[i].x &&
  this.player.y < this.obstacleArray[i].y + this.obstacleArray[i].width &&
  this.obstacleArray[i].y +this.obstacleArray[i].width > this.player.y ) { 
    
  }*/
};

Game.prototype.generateObstacle = function() {
  //Random obstacle ( walls ) generator
  for(var i = 0; i < 10; i++) {
    debugger;
    this.obstacleArray.push(new Obstacle(this));
  }
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
 this.obstacle.draw();
 };

Game.prototype.moveAll = function() {
  //this.background.move();
  //this.player.move();
  //this.obstacle.move();
};