(function() {
    'use strict';
    console.log('reading js');

    const myForm = document.querySelector('#input');
    const madLib = document.querySelector('#output');

    
    myForm.addEventListener('submit', function(event) {
        event.preventDefault();

        //grab value of each input
        const food = document.querySelector('#food').value;
        const plNoun = document.querySelector('#plNoun').value;
        const verbObj = document.querySelector('#verbObj').value;
        const plNoun2 = document.querySelector('#plNoun2').value;
        const verbIng = document.querySelector('#verbIng').value;
        const adj = document.querySelector('#adj').value;
        const noun = document.querySelector('#noun').value;
        const activity = document.querySelector('#activity').value;

        //error messages
        let myText;
        if(food == "") { 
            myText = "Please provide a food";
            document.querySelector('#food').focus();
        } else if (plNoun == "") {  
            myText = "Please provide a plural noun";
            document.querySelector('#plNoun').focus();
        } else if (verbObj == "") {  
            myText = "Please provide a verb done on an object";
            document.querySelector('#verbObj').focus();
        } else if (plNoun2 == "") {  
            myText = "Please provide a second plural noun";
            document.querySelector('#plNoun2').focus();
        } else if (verbIng == "") {  
            myText = "Please provide a verb ending in -ing";
            document.querySelector('#verbIng').focus();
        } else if (adj == "") {  
            myText = "Please provide an adjective";
            document.querySelector('#adj').focus();
        } else if (noun == "") {  
            myText = "Please provide a noun";
            document.querySelector('#noun').focus();
        } else if (activity == "") {  
            myText = "Please choose an activity";
            document.querySelector('#activity').focus();
        } else {
            myText = `Today is a great day! I started by having ${food} for breakfast. Later, I rolled around in some dirty ${plNoun}. Although I wanted to ${verbObj} my human, I couldn't find them anywhere around the house. This means I can do anything I want! I had been eyeing the ${plNoun2} in the living room, but wasn't allowed to touch them. After ${verbIng} them, I played with my favorite ${adj} ${noun}. I finished the day off by ${activity} with my friends.`;
        }

        madLib.innerHTML = myText;

        // Today is a great day! I started by having ____ for breakfast. Later, I rolled around in some dirty ____. Although I wanted to ___ my human, I couldn't find them anywhere around the house. This means I can do anything I want! I had been eyeing the ____ in the living room, but wasn't allowed to touch the,. After ____ them, I played with my favorite ___ ____. I finished the day off by ___ with my friends.
        

    })
}())