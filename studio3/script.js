(function() {
    'use strict';

    const startGame = document.getElementById('startgame');
    const gameControl = document.getElementById('gamecontrol');
    const gameGeneral = document.getElementById('game_general'); //elements that pertain to both players
    const game1 = document.getElementById('game1'); //elements that only pertain to p1 (egg, score, label)
    const game2 = document.getElementById('game2'); //elements that only pertain to p2 (egg, score, label)
    const p1Egg = document.getElementById('p1_egg');
    const p2Egg = document.getElementById('p2_egg');
    const score = document.getElementById('score');
    const actionArea = document.getElementById('actions');

    const gameData = {
        dice: ['images/meat.png', 'images/fern-2.png', 'images/fern-3.png', 'images/fern-4.png', 'images/fern-5.png', 'images/fern-6.png'], 
        players: ['player 1', 'player 2'],
        playerEgg: ['images/p1_egg.png', 'images/p2_egg.png'],
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

        if (gameData.index === 0) {
            p1Egg.innerHTML = `<img src="${gameData.playerEgg[gameData.index]}">`
        } else if (gameData.index === 1) {
            p2Egg.innerHTML = `<img src="${gameData.playerEgg[gameData.index]}">`
        }

        gameControl.innerHTML += '<button id="quit"> Wanna Quit?</button>'
        document.getElementById('quit').addEventListener('click', function() {
            location.reload();
        })

        setUpTurn();
    })

    function setUpTurn() {
        if (gameData.index === 0) {
            // p1Egg.innerHTML += `<img src="${gameData.playerEgg[gameData.index]}">`
            game1.innerHTML = `<p>Find a meal for ${gameData.players[gameData.index]}</p>`;
        } else if (gameData.index === 1) {
            // p2Egg.innerHTML += `<img src="${gameData.playerEgg[gameData.index]}">`
            game2.innerHTML = `<p>Find a meal for ${gameData.players[gameData.index]}</p>`;
        }
        
        actionArea.innerHTML = '<button id="roll">Find Meal</button>';
        document.getElementById('roll').addEventListener('click', function() {
            throwDice();
        })
    }

    function throwDice() {
        actionArea.innerHTML=''; //empty actionArea
        //get random values for 1-6
        gameData.roll1 = Math.floor(Math.random() * 6) + 1; 
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;

        gameGeneral.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;

        //put dice images on screen; dice array index needs to be one less than roll1 and roll2
        gameGeneral.innerHTML += `<img src="${gameData.dice[gameData.roll1-1]}"><img src="${gameData.dice[gameData.roll2-1]}">`;
        gameData.rollSum = gameData.roll1 + gameData.roll2;
        // gameData.rollSum = 2; //hard code to 2 to test snake eyes
        console.log(gameData.rollSum);

        //if two 1s are rolled (roll sum = 2) -> SNAKE EYES
        if (gameData.rollSum === 2) {
            console.log('snake eyes');
            gameGeneral.innerHTML += '<p>Oh snap! Snake eyes!</p>';
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
            gameGeneral.innerHTML += `<p>Sorry, one of your meals is meat, switching to ${gameData.players[gameData.index]}</p>`

            setTimeout(setUpTurn, 2000);
        }

        //if neither die is a 1
        else {
            console.log('the game proceeds');
            gameData.score[gameData.index] += gameData.rollSum; //take current score and add rollSum to it
            actionArea.innerHTML = '<button id="rollagain">New Meal</button> or <button id="pass">Skip Turn</button>';

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