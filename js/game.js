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
    this.isCollision();
    this.move();
  }.bind(this), 10);
  
  this.setListeners();
  this.generateObstacle();
  this.drawObstacles();

};

Game.prototype.move = function() {
  this.player.moveUp();
  this.player.moveDown();
  this.player.moveLeft();
  this.player.moveRight();
  this.player2.moveUp();
  this.player2.moveDown();
  this.player2.moveLeft();
  this.player2.moveRight();
};

Game.prototype.setListeners = function() {
  debugger;
  document.onkeydown = function(event) {
    switch(event.keyCode) {
      case 38: // Up
        
          this.player.trueUp();
        break;
      case 40: // Down
        if(this.isCollision(this.player))
        this.player.trueDown();
         break;
      case 37: // left
        if(this.isCollision(this.player))
        this.player.trueLeft();
        break;
      case 39: // right
        if(this.isCollision(this.player))
        this.player.trueRight();
        break;
      case 87:  //Up
        this.isCollision(this.player2);
        this.player2.trueUp();
        break;
      case 83:  //Down
        this.isCollision(this.player2);
        this.player2.trueDown();
        break;
      case 65:  //Left
        this.isCollision(this.player2);
        this.player2.trueLeft();
        break;
      case 68:  //Right
        this.isCollision(this.player2);
        this.player2.trueRight();
        break;  
      }
    }.bind(this);
      document.onkeyup = function(event) {
      switch( event.keyCode) {
        case 38: // Up
            this.player.falseUp();
          break;
        case 40: // Down
          this.player.falseDown();
           break;
        case 37: // left
          this.player.falseLeft();
          break;
        case 39: // right
          this.player.falseRight();
          break;
        case 87:  //Up
          this.player2.falseUp();
          break;
        case 83:  //Down
          this.player2.falseDown();
          break;
        case 65:  //Left
          this.player2.falseLeft();
          break;
        case 68:  //Right
          this.player2.falseRight();
          break;  
        }
  }.bind(this);
};



//Stops the game
Game.prototype.stop = function() {
  clearInterval(this.interval);
};

//Check collisions with walls/other players/item
Game.prototype.isCollision = function() {
  
  for (var i=0; i<this.obstacleArray.length; i++) {
    
    if(
      this.player.x - this.player.r <= this.obstacleArray[i].x + this.obstacleArray[i].w &&
      this.player.x + this.player.r > this.obstacleArray[i].x &&
      this.player.y < this.obstacleArray[i].y + this.obstacleArray[i].h &&
      this.player.y + this.player.r > this.obstacleArray[i].y ) { 
        console.log("Is collision");
        this.player.x = this.player.lastX;
        this.player.y = this.player.lastY;
        this.player.pressedKeys = [false,false,false,false]
        return false;
    }
    if(
      this.player2.x - this.player2.r <= this.obstacleArray[i].x + this.obstacleArray[i].w &&
      this.player2.x + this.player2.r > this.obstacleArray[i].x &&
      this.player2.y < this.obstacleArray[i].y + this.obstacleArray[i].h &&
      this.player2.y + this.player2.r > this.obstacleArray[i].y ) { 
        console.log("Is collision");
        this.player2.x = this.player2.lastX;
        this.player2.y = this.player2.lastY;
        this.player2.pressedKeys = [false,false,false,false]
        return false;
    }
  }
  return true;
};

//Fills obstacle array
Game.prototype.generateObstacle = function() {
  //Random obstacle ( walls ) generator
  for(var i = 0; i < 10; i++) { 
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
 this.drawObstacles();
 };

 //Draws obstacle array
Game.prototype.drawObstacles = function() {
  for (var i = 0; i < this.obstacleArray.length; i++) {
    this.obstacleArray[i].draw();
  }
};