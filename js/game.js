function Game(canvasId) {
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext("2d");

  //Array to store obstacles
  this.obstacleArray = [];
  
  //Objects
  this.Img = new Img(this);
  this.background = new Background(this);
  this.player = new Player(this, 50, this.canvas.height / 2, "red");
  this.player2 = new Player(this, this.canvas.width - 50, this.canvas.height / 2, "yellow");
  this.totem = new Totem (this, this.Img.gem); 
  this.score = new Score(this);
  this.audioVictory = new Audio("audio/victory.mp3");
  this.audioCombat = new Audio ("audio/combat3.mp3");
  this.audioStart = new Audio ("audio/stones.mp3")
}

//Starts the game
Game.prototype.start = function() {
  this.interval = setInterval(function(){
    this.clear();
    this.draw();
    this.isCollision();
    this.totem.colidesWith();
    this.move();
  }.bind(this), 16);
  this.audioCombat.play()
  this.setListeners();
  this.generateObstacle();
};

//Groups movement
Game.prototype.move = function() {
  this.player.move();
  this.player2.move();
};

//Listeners to move both
Game.prototype.setListeners = function() {
  document.onkeydown = function(event) {

    
    switch(event.keyCode) {
      case 38: // Up
          this.player.trueUp();
        break;
      case 40: // Down
        this.player.trueDown();
         break;
      case 37: // left
        this.player.trueLeft();
        break;
      case 39: // right
        this.player.trueRight();
        break;
      case 87:  //Up
        this.player2.trueUp();
        break;
      case 83:  //Down
        this.player2.trueDown();
        break;
      case 65:  //Left
        this.player2.trueLeft();
        break;
      case 68:  //Right
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
      this.player.y - this.player.r < this.obstacleArray[i].y + this.obstacleArray[i].h &&
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
      this.player2.y - this.player2.r< this.obstacleArray[i].y + this.obstacleArray[i].h &&
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
  var x = 0;
  var width = 25;
  //Top bars
  for(let i = 0; i < 10; i++) { 
    x += 120;
    let y = Math.floor(Math.random()* (90-0)+0);
    var long = Math.floor(Math.random()* (200-120)+120);
    this.obstacleArray.push(new Obstacle(this, x, y, width, long, this.Img.bushHori));   
  }
  
  //Middle bars
  for(var i = 0; i < 9; i++) { 
    x -= 120;
    let y = Math.floor(Math.random()* (350-240)+220);
    var long = Math.floor(Math.random()* (200-120)+120);
    this.obstacleArray.push(new Obstacle(this, x, y, width, long, this.Img.bushHori));   
  }

  //Bottom bars
  for(var i = 0; i < 9; i++) { 
    x += 120;
    let y = Math.floor(Math.random()* (700-470)+470);
    var long = Math.floor(Math.random()* (200-120)+120);
    this.obstacleArray.push(new Obstacle(this, x, y, width, long, this.Img.bushHori));   
  }

  //Vertical bars top
  for(var i = 0; i < 9; i++) { 
    let y = 20;
    y += 120;
    let x = Math.floor(Math.random()* (1000-150)+150);
    var long = Math.floor(Math.random()* (90-20)+20);
    this.obstacleArray.push(new Obstacle(this, x, y, long, width, this.Img.bushVert));   
  }

  for(var i = 0; i < 9; i++) { 
    let y = 220;
    y += 120;
    let x = Math.floor(Math.random()* (1000-150)+150);
    var long = Math.floor(Math.random()* (90-20)+20);
    this.obstacleArray.push(new Obstacle(this, x, y, long, width, this.Img.bushVert));   
  }

  for(var i = 0; i < 9; i++) { 
    let y = 420;
    y += 120;
    let x = Math.floor(Math.random()* (1000-150)+150);
    var long = Math.floor(Math.random()* (90-20)+20);
    this.obstacleArray.push(new Obstacle(this, x, y, long, width, this.Img.bushVert));   
  }
  
};

//Cleans whole screen to animate if necessary
Game.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Game.prototype.draw = function(){
  this.background.draw();
  this.drawObstacles();
  this.player.draw();
  this.player2.draw();
  this.totem.draw();
  this.score.draw();
 };

 //Draws obstacle array
Game.prototype.drawObstacles = function() {
  for (var i = 0; i < this.obstacleArray.length; i++) {
    this.obstacleArray[i].draw();
  }
};

Game.prototype.reset = function() {
  this.player.x = 50;
  this.player.y = this.canvas.height / 2;

  this.player2.x = this.canvas.width - 50;
  this.player2.y = this.canvas.height / 2;

  this.obstacleArray = []
  this.clear();
  this.draw();
  this.generateObstacle();

  this.totem.position = true;
  this.totem.draw();
  
};

Game.prototype.stop = function() {
  clearInterval(this.interval);
  this.audioVictory.play()
  this.audioCombat.pause()
  $("#game-over").fadeIn()

if(this.player.score == 6)
  $("#text-game-over").text("Player 1 wins!")
  else {
  $("#text-game-over").text("Player 2 wins!")
  }
};

