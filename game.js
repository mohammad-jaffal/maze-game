window.onload = function () {


    const startBox = document.getElementById('start');
    const endBox = document.getElementById('end');
    const borders = document.getElementsByClassName('boundary');
    const statusTitle = document.getElementById('status');

    var firstTime = true;
    var lost = false;
    var won = false;
    var score = 0;



    startBox.addEventListener('mouseenter', function (event) {
        if (firstTime) {
            firstTime = false;
            if (!lost)
                startGame();
        }
    });





    function restartGame() {

        startBox.addEventListener('click', function onClick() {
            if (lost) {

                lost = false;
                won = false;
                startGame();
            } else {
                if (won) {
                    startGame()
                    won = false;
                    lost = false;
                }
            }
        });

    }

    function startGame() {
        console.log("started");
        for (var i = 0; i < borders.length; i++) {
            borders[i].addEventListener('mouseenter', function (event) {
                if (!lost & !won) {
                    lost = true;
                    score -= 10;
                    if (score < 0) {
                        score = 0;
                    }

                    statusTitle.innerHTML = `You lost \n score: ${score} `;
                    console.log("lost");
                    restartGame();
                }
            });
        }

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





}