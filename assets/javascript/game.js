$(document).ready(function() {

    crystals = ["assets/images/red.png", "assets/images/orange.png", "assets/images/yellow.png", "assets/images/blue.png", ]
        // create wins
    var wins = 0;
    // create losses
    var losses = 0;
    // total guess score
    var guessCounter = 0;
    // create crystal random values

    $("#wins").text(wins);
    $("#losses").text(losses);
    
    //New game function
    function newGame() {

        // random value generator for player to match
        var randomNumber = Math.floor(Math.random() * 101) + 19;
        //console.log(randomNumber); 
        $("#numberToGuess").text(randomNumber);


        //New crystal function, randomize value to img files
        var newCrystalOrder = []
            while (newCrystalOrder.length < 4) {
                  var crystalValue = Math.floor(Math.random() * 12) + 1;
          
        //Counter to add guesses

        // If guess is correct you win

        // Else guess is incorrect you lose (newGame)
    }
    counter = 0;
        $("#yourScore").text(counter);
        newGame();
  }
});
