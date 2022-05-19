window.onload = function () {


    const startBox = document.getElementById('start');
    const endBox = document.getElementById('end');
    const borders = document.getElementsByClassName('boundary');
    const statusTitle = document.getElementById('status');
    const restartBtn = document.getElementById('restartBtn');


    var firstTime = true;
    var lost = false;
    var won = false;
    var score = 0;


    // event listener for first time hover over s box
    startBox.addEventListener('mouseenter', function (event) {
        if (firstTime) {
            firstTime = false;
            startGame();
        }
    });


    // restart the game after a win or a loss
    function restartGame() {

        startBox.addEventListener('click', function onClick() {
            if (lost || won) {
                lost = false;
                won = false;
                startGame();
            }
        });

    }


    // initializing the game for playing
    function startGame() {

        statusTitle.innerHTML = "Begin by moving your mouse over the \"S\"."

        for (var i = 0; i < borders.length; i++) {
            // if the mouse touches the borders
            borders[i].addEventListener('mouseenter', function (event) {
                if (!lost & !won) {
                    lost = true;
                    score -= 10;
                    statusTitle.innerHTML = `You lost \n score: ${score} `;
                    console.log("lost");
                    restartGame();
                }
            });
        }

        // when the mouse reaches end without loss
        endBox.addEventListener('mouseenter', function (event) {

            if (!lost & !won) {
                won = true;
                score += 5;
                statusTitle.innerHTML = `You won \n score: ${score} `;
                console.log("won");
                restartGame();
            }
        });
    }

    // button for restarting the game
    restartBtn.addEventListener('click', function onClick() {
        location.reload();
    });


}