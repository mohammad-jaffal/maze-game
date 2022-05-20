window.onload = function () {


    var startBox = document.getElementById('start');
    var endBox = document.getElementById('end');
    var borders = document.getElementsByClassName('boundary');
    var statusTitle = document.getElementById('status');
    var restartBtn = document.getElementById('restartBtn');


    var firstTime = true;
    var lost = false;
    var won = false;
    var score = 0;



    // event listener for first time hover over s box
    startBox.addEventListener('mouseenter', function (event) {
        if (firstTime) {
            statusTitle.innerHTML = "Game Started GL!";
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



    // initializing the game for playing
    function startGame() {
        colorBorder("#eeeeee");

        // creating on hover for the borders
        for (var i = 0; i < 5; i++) {
            // if the mouse touches the borders
            borders[i].addEventListener('mouseenter', function (event) {
                if (!lost & !won) {
                    colorBorder("red");
                    lost = true;
                    score -= 10;
                    statusTitle.innerHTML = `You lost <br/> score: ${score} `;
                    console.log("lost");
                    resetGame();
                }
            });
        }

        // when the mouse reaches end without loss
        endBox.addEventListener('mouseenter', function (event) {

            if (!lost & !won) {
                won = true;
                colorBorder("green");
                score += 5;
                statusTitle.innerHTML = `You won <br/> score: ${score} `;
                console.log("won");
                resetGame();
            }
        });

        // button for restarting the game
        restartBtn.addEventListener('click', function onClick() {
            location.reload();
        });


    }






    // reset the game after a win or a loss
    function resetGame() {

        startBox.addEventListener('click', function onClick() {
            if (lost || won) {
                lost = false;
                won = false;
                startGame();
            }
        });

    }




}