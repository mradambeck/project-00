console.log("Javascript running");
var $doc = $(document);

// Player constructor
function Player(playerNumber){
  this.playerNumber = playerNumber;
  this.playerName = "Player " + playerNumber;

  // Assigning movement to directional keys
  this.movement = function(){
    console.log('gamePlay: ', gamePlay);
    console.log("calling movement");

    // Player 1
      if (this.playerNumber === 1){
        $doc.on("keydown", function(event){
          var $playerOne = $('#player-one');
          var playerPosition = $playerOne.position();
          if (event.which === 39){
            event.preventDefault();
            if (playerPosition.left < 850){
              $playerOne.animate({left: playerPosition.left+20}, 50);
            }
            gamePlay.checkWin(playerPosition.left, "Player One"); //shouldn't call another object from a different object
          }
        });

    // Player 2
      } else if (this.playerNumber === 2){
        $doc.on("keydown", function(event){
            var $playerTwo = $('#player-two');
            var playerPosition = $playerTwo.position();
            if (event.which === 68){
              event.preventDefault();
              if (playerPosition.left < 850){
                    $playerTwo.animate({left: playerPosition.left+20}, 50);
                  }
                  gamePlay.checkWin(playerPosition.left, "Player Two"); //shouldn't call another object from a different object
            }
        });
      }
  };
}

// gamePlay object
var gamePlay = {
  p1Score: 0,
  p2Score: 0,

  reset: function(){
    console.log('reset');
    $('#player-one').animate({left: 20}, 300);
    $('#player-two').animate({left: 20}, 300);
    $('#start-game').removeClass('display-none');
    gameStart();
  },

  checkWin: function(position, winner){
    if (position > 840 ){
      $('#winners-circle').text(winner + " WINS!");
      if (winner === "Player One"){
        this.p1Score++;
        $('#p1-score').text(this.p1Score);
      } else if (winner === "Player Two"){
        this.p2Score++;
        $('#p2-score').text(this.p2Score);
      }
      this.reset();
    }
  }
};


// Start game with spacebar
var gameStart = function(){
  $doc.on("keydown", function startGame(event){
    if (event.keyCode === 32){
      console.log("gameStart");
      $('#start-game').addClass('display-none');
      $('#winners-circle').text('');
      $('#player-one').animate({left: 20}, 0);
      $('#player-two').animate({left: 20}, 0);
    }
  });
};

// Creates player objects
var playerOne = new Player(1);
var playerTwo = new Player(2);
playerOne.movement();
playerTwo.movement();

// CSS blinkies
$doc.ready(function() {
  var blinkfunction = function(){
    $('.blink').toggle();
  };
  window.setInterval(blinkfunction, 600);
  gameStart();
});
