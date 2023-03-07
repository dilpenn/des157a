(function() {
    'use strict';

    const startGame = document.getElementById('startgame');
    const gameControl = document.getElementById('gamecontrol');
    const game = document.getElementById('game');
    const score = document.getElementById('score');
    const actionArea = document.getElementById('actions');

    const gameData = {
        dice: ['images/meat.png', 'images/fern-2.png', 'images/fern-3.png', 'images/fern-4.png', 'images/fern-5.png', 'images/fern-6.png'], 
        players: ['player 1', 'player 2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 11
    }

    startGame.addEventListener('click', function() {
        //randomly set game index 
        gameData.index = Math.round(Math.random()); //random # between 0 & 1
        console.log(gameData.index);
        gameControl.innerHTML = '<h2>The Game Has Started<h2>';
        gameControl.innerHTML += '<button id="quit"> Wanna Quit?</button>'

        document.getElementById('quit').addEventListener('click', function() {
            location.reload();
        })

        setUpTurn();
    })

    function setUpTurn() {
        game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
        actionArea.innerHTML = '<button id="roll">Roll the Dice</button>';
        document.getElementById('roll').addEventListener('click', function() {
            throwDice();
        })
    }

    function throwDice() {
        actionArea.innerHTML=''; //empty actionArea
        //get random values for 1-6
        gameData.roll1 = Math.floor(Math.random() * 6) + 1; 
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;

        game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;

        //put dice images on screen; dice array index needs to be one less than roll1 and roll2
        game.innerHTML += `<img src="${gameData.dice[gameData.roll1-1]}"><img src="${gameData.dice[gameData.roll2-1]}">`;
        gameData.rollSum = gameData.roll1 + gameData.roll2;
        // gameData.rollSum = 2; //hard code to 2 to test snake eyes
        console.log(gameData.rollSum);

        //if two 1s are rolled (roll sum = 2) -> SNAKE EYES
        if (gameData.rollSum === 2) {
            console.log('snake eyes');
            game.innerHTML += '<p>Oh snap! Snake eyes!</p>';
            gameData.score[gameData.index] = 0;

            //if gameData.index = 0 -> return false; gameData.index = 1 -> return true
            gameData.index ? (gameData.index = 0) : (gameData.index = 1); //switch player
            
            //show current score
            showCurrentScore();

            setTimeout(setUpTurn, 2000); //user has 2 seconds to read snake eyes message; then set up turn for next player
        }

        //if either die is a 1
        else if (gameData.roll1 === 1 || gameData.roll2 === 1) {
            console.log('one of the two dice was a 1');
            gameData.index ? (gameData.index = 0) : (gameData.index = 1); //switch player (roll 1 -> lose turn)
            game.innerHTML += `<p>Sorry, one of your rolls was a one, switching to ${gameData.players[gameData.index]}</p>`

            setTimeout(setUpTurn, 2000);
        }

        //if neither die is a 1
        else {
            console.log('the game proceeds');
            gameData.score[gameData.index] += gameData.rollSum; //take current score and add rollSum to it
            actionArea.innerHTML = '<button id="rollagain">Roll again</button> or <button id="pass">Pass</button>';

            document.getElementById('rollagain').addEventListener('click', function() {
                //setUpTurn();
                throwDice();
            })

            document.getElementById('pass').addEventListener('click', function() {
                //switch player
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setUpTurn();
            })

            checkWinningCondition();
        }

    }

    function checkWinningCondition() {
        if(gameData.score[gameData.index] > gameData.gameEnd) { //if score is greater than game point
            score.innerHTML = `<h2>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!</h2>`;

            actionArea.innerHTML = "";
            document.getElementById('quit').innerHTML = 'Start a New Game?';
        }

        else {
            // show current score
            showCurrentScore();
        }
    }

    function showCurrentScore() {
            score.innerHTML = `<p>The score is currently <strong>${gameData.players[0]} ${gameData.score[0]}</strong> / <strong>${gameData.players[1]} ${gameData.score[1]}</strong></p>`
    }

})();