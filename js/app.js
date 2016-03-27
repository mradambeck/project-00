console.log("Javascript running");
var $doc = $(document);

function Player(playerNumber){
  this.playerNumber = playerNumber;
  this.playerName = "Player " + playerNumber;
  // assigning movement to directional keys
  this.movement = function(){
    if (this.playerNumber === 1){
      $doc.on("keydown", function(event){
        var $playerOne = $('#player-one');
        var playerPosition = $playerOne.position();
        switch(event.which) {
          case 39: // right arrow
            event.preventDefault();
            $playerOne.animate({left: playerPosition.left+5}, 75);
            scoreBoard.checkWin(playerPosition.left, "Player One");
            break;
          case 37: // left arrow
            event.preventDefault();
            $playerOne.animate({left: playerPosition.left-5}, 75);
            scoreBoard.checkWin(playerPosition.left, "Player One");
            break;
          case 38: // up arrow
            event.preventDefault();
            $playerOne.animate({top: 20, left: playerPosition.left+10}, 300);
            scoreBoard.checkWin(playerPosition.left, "Player One");
            break;
          case 40: // down arrow
            event.preventDefault();
            $playerOne.animate({top: 430, left: playerPosition.left+10}, 300);
            scoreBoard.checkWin(playerPosition.left, "Player One");
            break;
        }
      });
    } else if (this.playerNumber === 2)
      $doc.on("keydown", function(event){
        var $playerTwo = $('#player-two');
        var playerPosition = $playerTwo.position();
        switch(event.which) {
          case 68: // right arrow
            event.preventDefault();
            $playerTwo.animate({left: playerPosition.left+5}, 75);
            scoreBoard.checkWin(playerPosition.left, "Player Two");
            break;
          case 65: // left arrow
            event.preventDefault();
            $playerTwo.animate({left: playerPosition.left-5}, 75);
            scoreBoard.checkWin(playerPosition.left, "Player Two");
            break;
          case 87: // up arrow
            event.preventDefault();
            $playerTwo.animate({top: 20, left: playerPosition.left+10}, 300);
            scoreBoard.checkWin(playerPosition.left, "Player Two");
            break;
          case 83: // down arrow
            event.preventDefault();
            $playerTwo.animate({top: 430, left: playerPosition.left+10}, 300);
            scoreBoard.checkWin(playerPosition.left, "Player Two");
            break;
        }
      });
  };
}

var scoreBoard = {
  p1Score: 0,
  p2Score: 0,
  winner: false,
  checkWin: function(position, winner){
    // checks position to see if at the end of the game board
    if (position > 885){
      alert (winner + "wins!");
      if (winner === "Player One"){
        this.p1Score++;
        $('#p1-score').text(this.p1Score);
      } else {
        this.p2Score++;
        $('#p2-score').text(this.p2Score);
      }
      this.winner = true;
      console.log("p1: "+this.p1Score + "p2: " + this.p2Score + "winner: " + winner);
    }
  }
};

// Setup Players
var playerOne = new Player(1,'"#player-one"');
var playerTwo = new Player(2,'#player-two');

$doc.ready(function() {
  console.log( "Document ready!" );

// Start game with spacebar
  $doc.on("keydown", function startGame(event){
    if (event.keyCode === 32){
      // Countdown so everyone starts on time
      $('#start-game').text("3");
      var countDown = setInterval(function(){
        $('#start-game').text(function(i,num){
          if(parseInt(num)>1){
            return parseInt(num)-1;
          } else {
            clearTimeout(countDown);
            playerOne.movement();
            playerTwo.movement();
            return "Go!";
          }
        });
      }, 1000);
    }
  });

});
