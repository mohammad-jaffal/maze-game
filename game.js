window.onload = function () {


    var startBox = document.getElementById('start');
    var endBox = document.getElementById('end');
    var borders = document.getElementsByClassName('boundary');
    var statusTitle = document.getElementById('status');
    var gameBox = document.getElementById('game');


    var firstTime = true;
    var lost = false;
    var won = false;
    var score = 0;

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
                resetGame();
            }
        });


        // when the mouse leaves the game box after start
        gameBox.addEventListener('mouseleave',function(event){
            if (!lost & !won) {
                colorBorder("red");
                lost = true;
                score -= 10;
                statusTitle.innerHTML = `You lost <br/> score: ${score} `;
                resetGame();
            }


        });




        // button for restarting the game
        borders[5].addEventListener('click', function onClick() {
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