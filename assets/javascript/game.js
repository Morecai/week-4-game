$(document).ready(function() {

            crystals = ["assets/images/red.png", "assets/images/orange.png", "assets/images/yellow.png", "assets/images/blue.png", ]


            $("#wins").text(wins);
            $("#losses").text(losses);


            // create wins
            var wins = 0;
            // create losses
            var losses = 0;
            // total guess score
            var guessCounter = 0;
            // random value generator for player to match
            var randomNumber = Math.floor(Math.random() * 101) + 19;
            console.log(randomNumber);

            $("#numberToGuess").text("Can you match this number? " + randomNumber);
            //}

            // function newCrystal() {
            var gem1Value = $("#gem1").val();
            var gem2Value = $("#gem2").val();
            var gem3Value = $("#gem3").val();
            var gem4Value = $("#gem4").val();
            console.log(gem4);
            //New crystal function, randomize value to img files
            var newCrystalNumber = [];
            for (var i = 0; i < 4; i++) {
                var crystalValue = Math.floor(Math.random() * 12) + 1;
                console.log(crystalValue);
                newCrystalNumber.push(crystalValue);
                console.log(newCrystalNumber);


                $("#gem1").attr("value", newCrystalNumber[0]);
                $("#gem2").attr("value", newCrystalNumber[1]);
                $("#gem3").attr("value", newCrystalNumber[2]);
                $("#gem4").attr("value", newCrystalNumber[3]);
                console.log(gem4);

            }
            guessCounter = 0;
            $(".gem").on('click', function() {
                    guessCounter += parseInt(this.getAttribute("value"));
                    console.log(yourScore)

                    $("#yourScore").text(guessCounter);

                    if (guessCounter === numberToGuess) {
                        winGame();
                        console.log("You Win!");
                        // else if{
                              
                        // }
                    } else {
                        guessCounter !== numberToGuess
                        loseGame();
                        console.log("Sorry you lose");
                    }
                    
                });

                function winGame() {
                    wins++;
                    $("#wins").html = "Wins: " + wins;
                    newGame();
                }

                function loseGame() {
                    losses++;
                    $("#losses").html = "Losses: " + losses;
                    newGame();
                }

                function newGame() {
                    wins = 0;
                    losses = 0;
                    guessCounter = 0;
                    randomNumber;
                }
            });
