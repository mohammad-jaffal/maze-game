window.onload = function () {


    var startBox = document.getElementById('start');
    var endBox = document.getElementById('end');
    var borders = document.getElementsByClassName('boundary');
    var statusTitle = document.getElementById('status');
    var gameBox = document.getElementById('game');

    var bestTimerNull = true;
    var firstTime = true;
    var lost = false;
    var won = false;
    var score = 0;
    var startTime;
    var interval
    var liveTimer;
    var lastTimer = 0;
    var bestTimer;

    // pre styling restart button
    borders[5].innerHTML = "Restart";
    borders[5].style.textAlign = "center";
    borders[5].style.cursor = "pointer";


    // adding an empty line under the title for score
    statusTitle.innerHTML = "Begin by moving your mouse over the \"S\".<br/> &#160";


    // event listener for first time hover over s box
    startBox.addEventListener('mouseenter', function (event) {
        if (firstTime) {
            statusTitle.innerHTML = "Game Started GL! <br/> &#160";
            firstTime = false;
            startGame();
        }
    });


    // change borders colors for win/lose
    function colorBorder(color) {
        for (var i = 0; i < 5; i++) {
            borders[i].style.backgroundColor = color;
        }
    }

    // function for when user lose 
    var lostGame = function (event) {
        if (!lost & !won) {
            stop();
            colorBorder("red");
            lost = true;
            score -= 10;
            statusTitle.innerHTML = `You lost <br/> score: ${score} `;
            resetGame();
        }
    }


    // function for when user wins 
    var wonGame = function (event) {
        if (!lost & !won) {
            stop();
            won = true;
            colorBorder("green");
            score += 5;
            statusTitle.innerHTML = `You won <br/> score: ${score} `;
            resetGame();
        }
    }


    // function to stop the timer
    function stop() {
        clearInterval(interval);

    }



    // initializing the game for playing
    function startGame() {
        startTime = Date.now();
        interval = setInterval(function () {
            liveTimer = Date.now() - startTime;
            document.getElementById("liveTime").innerHTML = `${(liveTimer / 1000).toFixed(1)} s`;
        }, 100);




        // resetting boundaries color
        colorBorder("#eeeeee");


        // creating on hover for the borders
        for (var i = 0; i < 5; i++) {
            // if the mouse touches the borders
            borders[i].addEventListener('mouseenter', lostGame);
        }

        // when the mouse reaches end without loss
        endBox.addEventListener('mouseenter', wonGame);


        // when the mouse leaves the game box after start
        gameBox.addEventListener('mouseleave', lostGame);


        // button for restarting the game
        borders[5].addEventListener('click', function onClick() {
            location.reload();
        });

    }



    // reset the game after a win or a loss
    function resetGame() {

        // when the user clicks on s-box
        startBox.addEventListener('click', function onClick() {
            if (won) {
                lastTimer = liveTimer;
                document.getElementById("lastTime").innerHTML = `${(lastTimer / 1000).toFixed(1)} s`;

                // if its first time the user plays
                if (bestTimerNull) {
                    bestTimer = lastTimer;
                    bestTimerNull = false;
                }
                else {
                    if (bestTimer > lastTimer) {
                        bestTimer = lastTimer
                    }
                }
                document.getElementById("bestTime").innerHTML = `${(bestTimer / 1000).toFixed(1)} s`;
            }


            if (lost || won) {
                lost = false;
                won = false;
                startGame();
            }
        });
    }






}