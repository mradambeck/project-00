// sideCar - racing game

// player builder
function Player(){
  this.playerNumber = "Player 1";
  this.moveLeft = function(){
    //move player to left
  };
  this.moveRight = function(){
    //move player to right
  };
  this.jump = function(){
    //player switches to other side of gameboard
  };
  this.powerUp = function(){
    //player has gotten a powerup
  };
}

function Obstacle(color){
  this.size = Math.random(0,10);
  this.color = color;
}

function Enemy(){
  this.speed = Math.random(0,10);
  this.sprite = badGuy;
}

function GameBoard(level){
  this.level = level;
  this.height = math.Random(0,10);
}

var scoreBoard = {
  playerOneScore: 0,
  playerTwoScore: 0,
  timer: 0,
  playerOneLife: 100,
  playerTwoLife: 100,
  level: 1
};
