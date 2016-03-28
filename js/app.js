console.log("Javascript running");
var $doc = $(document);

function Player(playerNumber){
  this.playerNumber = playerNumber;
  this.playerName = "Player " + playerNumber;
  // assigning movement to directional keys
  this.movement = function(){
    // if (scoreBoard.gameOver === false){
    console.log("calling movement");
      if (this.playerNumber === 1){
        $doc.on("keydown", function(event){
          // if (scoreBoard.gameOver === false){
            var $playerOne = $('#player-one');
            var playerPosition = $playerOne.position();
            if (event.which === 39){
              event.preventDefault();
              // console.log('keypress 39');
              if (playerPosition.left < 850){
                $playerOne.animate({left: playerPosition.left+20}, 50);
              }
                  console.log('player1: checking win');
              scoreBoard.checkWin(playerPosition.left, "Player One");
            }
          // }
        });
      } else if (this.playerNumber === 2){
        $doc.on("keydown", function(event){
            // if (scoreBoard.gameOver === false){
            var $playerTwo = $('#player-two');
            var playerPosition = $playerTwo.position();
            if (event.which === 68){
              event.preventDefault();
              // console.log('keypress 68');
              if (playerPosition.left < 850){
                    $playerTwo.animate({left: playerPosition.left+20}, 50);
                  }
                  console.log('player2: checking win');
                  scoreBoard.checkWin(playerPosition.left, "Player Two");
            }
          // }
        });
      }
    // } else {
    //   return false;
    // }
  };
}

// Scoreboard object
var scoreBoard = {
  p1Score: 0,
  p2Score: 0,
  // gameOver: false,
  reset: function(){
    console.log('reset');
    $('#player-one').animate({left: 20}, 500);
    $('#player-two').animate({left: 20}, 500);
    $('#start-game').removeClass('display-none');
    gameStart();
  },
  checkWin: function(position, winner){
    // console.log('checkWin');
    // checks position to see if at the end of the game board
    if (position > 840 ){
      console.log("position > 840");
      $('#winners-circle').text(winner + " WINS!");
      if (winner === "Player One"){
        this.p1Score++;
        $('#p1-score').text(this.p1Score);
        console.log("playerOne wins");
      } else if (winner === "Player Two"){
        this.p2Score++;
        $('#p2-score').text(this.p2Score);
        console.log("playerTwo wins");
      }
      // this.gameOver = true;
      // console.log("scoreBoard.gameOver = " + scoreBoard.gameOver);
      scoreBoard.reset();
    }
  }
};

var gameStart = function(){
  // Start game with spacebar
  $doc.on("keydown", function startGame(event){
    if (event.keyCode === 32){
      console.log("gameStart");
      // scoreBoard.gameOver = false;
        // console.log("scoreBoard.gameOver = " + scoreBoard.gameOver);
      $('#start-game').addClass('display-none');
      $('#winners-circle').text('');
      // console.log("added display none to $startGame");
      playerOne.movement();
      playerTwo.movement();
    } else {
      return;
    }
  });
};

// Creates player objects
var playerOne = new Player(1);
var playerTwo = new Player(2);



$doc.ready(function() {
  console.log( "Document ready!" );

  var blinkfunction = function(){
    $('.blink').toggle();
  };
  window.setInterval(blinkfunction, 600);
  gameStart();
});
