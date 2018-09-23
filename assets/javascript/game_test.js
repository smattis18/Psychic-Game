    var wins = 0;   //Declare wins variable
    var losses = 0;     //Declare losses variable
    var guessNum = 9;   //Declare guess counter variable
    var arrayGuesses = [];    //Declare running guess total
    var i = 0;  //Delcare counter variable
    var randLetter;     //Declare random letter variable

    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("guessNum").innerHTML = guessNum;
        
        document.onkeyup = function(event) {    //Event listener

            if (guessNum > 0) {   //Store letters entered, in array enough times to fill (9)
             arrayGuesses.push(event.key.toLowerCase());
             console.log(arrayGuesses[i]);

            if (guessNum === 9) {
                function getRandomUppercaseChar() {
                    var r = Math.floor(Math.random() * 26);
                    return String.fromCharCode(65 + r);
                }
                var x = getRandomUppercaseChar();   //Function call to generate random letter for new game
                randLetter = x.toLowerCase();
                    console.log(randLetter);
            }
            
            if (arrayGuesses[i] === randLetter) {   //Check for win outcome
                wins++;
                document.getElementById("wins").innerHTML = wins;
                guessNum = 9;
                document.getElementById("guessNum").innerHTML = guessNum;
                arrayGuesses = [];
                document.getElementById("guesses").innerHTML = arrayGuesses;
                i = 0;
            }             
            
            else if (arrayGuesses[i] != randLetter) {     //Check for unsuccessful guess outcome
                guessNum--;
                if (guessNum === 0) { //Check for final guess
                    losses++;
                    document.getElementById("losses").innerHTML = losses;
                    guessNum = 9;
                    document.getElementById("guessNum").innerHTML = guessNum;
                    arrayGuesses = [];
                    document.getElementById("guesses").innerHTML = arrayGuesses;
                    i = 0;
                } else {
                    document.getElementById("guessNum").innerHTML = guessNum;
                    document.getElementById("guesses").innerHTML = arrayGuesses;
                    console.log(guessNum);
                    i++;
                }
            }
            }
        }