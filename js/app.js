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
        if (event.which === 39){
          event.preventDefault();
          if (playerPosition.left < 200){ //890
                $playerOne.animate({left: playerPosition.left+5}, 75);
              }
              scoreBoard.checkWin(playerPosition.left, "Player One");
        }
        // switch(event.which) {
        //   case 39: // right arrow
        //     event.preventDefault();
        //     if (playerPosition.left < 200){ //890
        //       $playerOne.animate({left: playerPosition.left+5}, 75);
        //     }
        //     scoreBoard.checkWin(playerPosition.left, "Player One");
        //     break;
        //   case 37: // left arrow
        //     event.preventDefault();
        //     $playerOne.animate({left: playerPosition.left-5}, 75);
        //     scoreBoard.checkWin(playerPosition.left, "Player One");
        //     break;
        //   case 38: // up arrow
        //     event.preventDefault();
        //     $playerOne.animate({top: 20, left: playerPosition.left+10}, 300);
        //     scoreBoard.checkWin(playerPosition.left, "Player One");
        //     break;
        //   case 40: // down arrow
        //     event.preventDefault();
        //     $playerOne.animate({top: 430, left: playerPosition.left+10}, 300);
        //     scoreBoard.checkWin(playerPosition.left, "Player One");
        //     break;
        // }
      });
    } else if (this.playerNumber === 2){
        $doc.on("keydown", function(event){
          var $playerTwo = $('#player-two');
          var playerPosition = $playerTwo.position();
          if (event.which === 68){
            event.preventDefault();
            if (playerPosition.left < 200){ //890
                  $playerOne.animate({left: playerPosition.left+5}, 75);
                }
                scoreBoard.checkWin(playerPosition.left, "Player One");
          }
          // switch(event.which) {
          //   case 68: // right arrow
          //     event.preventDefault();
          //     if (playerPosition.left < 200){
          //       $playerTwo.animate({left: playerPosition.left+5}, 75);
          //     }
          //     scoreBoard.checkWin(playerPosition.left, "Player Two");
          //     break;
          //   case 65: // left arrow
          //     event.preventDefault();
          //     $playerTwo.animate({left: playerPosition.left-5}, 75);
          //     scoreBoard.checkWin(playerPosition.left, "Player Two");
          //     break;
          //   case 87: // up arrow
          //     event.preventDefault();
          //     $playerTwo.animate({top: 20, left: playerPosition.left+10}, 300);
          //     scoreBoard.checkWin(playerPosition.left, "Player Two");
          //     break;
          //   case 83: // down arrow
          //     event.preventDefault();
          //     $playerTwo.animate({top: 430, left: playerPosition.left+10}, 300);
          //     scoreBoard.checkWin(playerPosition.left, "Player Two");
          //     break;
          // }
        });
      }
  };
}

// Scoreboard object
var scoreBoard = {
  p1Score: 0,
  p2Score: 0,
  gameOver: false,
  reset: function(){
    $('#player-one').animate({left: 20}, 300);
    $('#player-two').animate({left: 20}, 300);
    this.gameOver = false;
    gameStart();
    $('#reset-btn').addClass('display-none');

  },
  checkWin: function(position, winner){
    // checks position to see if at the end of the game board
    if (position > 180 && !this.gameOver){ //885
      alert (winner + "wins!");
      if (winner === "Player One"){
        this.p1Score++;
        $('#p1-score').text(this.p1Score);
      } else {
        this.p2Score++;
        $('#p2-score').text(this.p2Score);
      }
      this.gameOver = true;
      console.log("p1: "+this.p1Score + "p2: " + this.p2Score + "winner: " + winner);
      $('#reset-btn').removeClass('display-none');
      $('#reset-btn').click(function(){
        scoreBoard.reset();
        $('#start-game').text("PRESS SPACEBAR TO START");
        $('#start-game').addClass("btn-primary, btn-lg");
        gameStart();
      }
    );
    }
  }
};

var gameStart = function(){
  $doc.on("keydown", function startGame(event){

    if (event.keyCode === 32){
      // Countdown to ensure everyone starts at the same time
      $('#start-game').text("3");

      // var countDown = setInterval(function(){
      //   // clearTimeout(countDown);
      //   $('#start-game').text(function(i,num){
      //     if(num==="3"){
      //       return "2";
      //     } else if (num ==="2"){
      //       return "1";
      //     } else if (num ==="1"){
      //       clearTimeout(countDown);
      //       playerOne.movement();
      //       playerTwo.movement();
      //       return "Go!";
      //     }
      //   });
      // }, 1000);

      playerOne.movement();
      playerTwo.movement();
      $('#start-game').addClass('display-none');

    }
  });
};

// Creates player objects
var playerOne = new Player(1);
var playerTwo = new Player(2);

$doc.ready(function() {
  console.log( "Document ready!" );

// Start game with spacebar
gameStart();

});
