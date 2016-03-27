console.log("Javascript running");

function Player(playerNumber, divID){
  this.playerNumber = playerNumber;
  this.playerName = "Player " + playerNumber;
  this.divID = divID;
  this.movement = function(divID){
    if (this.playerNumber === 1){
      $( document ).on("keydown", function(event){
        var $playerOne = $('#player-one');
        var playerPosition = $playerOne.position();
        switch(event.which) {
          case 39: // right arrow
            event.preventDefault();
            $playerOne.animate({left: playerPosition.left+5}, 75);
            checkWin(playerPosition.left, "Player One");
            break;
          case 37: // left arrow
            event.preventDefault();
            $playerOne.animate({left: playerPosition.left-5}, 75);
            checkWin(playerPosition.left, "Player One");
            break;
          case 38: // up arrow
            event.preventDefault();
            $playerOne.animate({top: 20, left: playerPosition.left+10}, 300);
            checkWin(playerPosition.left, "Player One");
            break;
          case 40: // down arrow
            event.preventDefault();
            $playerOne.animate({top: 430, left: playerPosition.left+10}, 300);
            checkWin(playerPosition.left, "Player One");
            break;
        }
      });
    } else if (this.playerNumber === 2)
      $( document ).on("keydown", function(event){
        var $playerTwo = $('#player-two');
        var playerPosition = $playerTwo.position();
        switch(event.which) {
          case 68: // right arrow
            event.preventDefault();
            $playerTwo.animate({left: playerPosition.left+5}, 75);
            checkWin(playerPosition.left, "Player Two");
            break;
          case 65: // left arrow
            event.preventDefault();
            $playerTwo.animate({left: playerPosition.left-5}, 75);
            checkWin(playerPosition.left, "Player Two");
            break;
          case 87: // up arrow
            event.preventDefault();
            $playerTwo.animate({top: 20, left: playerPosition.left+10}, 300);
            checkWin(playerPosition.left, "Player Two");
            break;
          case 83: // down arrow
            event.preventDefault();
            $playerTwo.animate({top: 430, left: playerPosition.left+10}, 300);
            checkWin(playerPosition.left, "Player Two");
            break;
        }
      });
  };
}

var checkWin = function(position, winner){
  if (position > 885){
    alert (winner + " wins!");
    console.log(position, winner);
  }
};

var playerOne = new Player(1,'"#player-one"');
playerOne.movement();
var playerTwo = new Player(2,'#player-two');
playerTwo.movement();

$( document ).ready(function() {
  console.log( "Document ready!" );

});
