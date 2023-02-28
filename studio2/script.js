(function() {
    'use strict';
    console.log('reading js');

    // MOVE CAR TO DIFFERENT LANDMARKS WHEN CLICKED ON
    const landmarks = document.querySelectorAll('.map_layout img'); //creates array of landmarks
    const car = document.querySelector('#car');

    landmarks.forEach(function (eachSpot) {
        eachSpot.addEventListener('mousedown', moveCar); //when mouse down, move car
        car.className = 'start'; //start car from 'start' position
    })

    function moveCar(event) {
        const thisLocation = event.target.id;
        console.log(thisLocation);

        //change class name to change car location
        switch (thisLocation) {
            case 'elk' : car.className = 'elk'; break;  //move to elk
            case 'sand' : car.className = 'sand'; break;  //move to sand dune
            case 'city' : car.className = 'city'; break;  //move to city
            case 'home' : car.className = 'start'; break;  //move to start position
        }
    }


    //CREATE OVERLAY OF IMAGE ONCE LANDMARK IS CLICKED
    const img = document.querySelectorAll('#images img') //array of images

    document.querySelector('.open').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('overlay').className = 'showing'; //change class to 'showing' when clicked
    })

    document.querySelector('#city').addEventListener('click', function(event) {
        event.preventDefault();
        img[0].className = 'showing'; //display city_img when city is clicked
    })

    document.querySelector('#sand').addEventListener('click', function(event) {
        event.preventDefault();
        img[1].className = 'showing'; //display sand_img when sand is clicked
    })

    document.querySelector('#elk').addEventListener('click', function(event) {
        event.preventDefault();
        img[2].className = 'showing'; //display elk_img when elk is clicked
    })

    document.querySelector('.close').addEventListener('click', function(event) { //close window when x is clicked
        event.preventDefault();
        document.getElementById('overlay').className = 'hidden';
    })

    document.addEventListener('keydown', function(event) { //close window when esc is pressed
        if(event.key === 'Escape') {
            document.getElementById('overlay').className = 'hidden';
        }
    })

})();