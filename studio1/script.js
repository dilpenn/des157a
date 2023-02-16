(function() {
    'use strict';
    console.log('reading js');

    const myForm = document.querySelector('#input');
    const madLib = document.querySelector('#output');

    
    myForm.addEventListener('submit', function(event) {
        event.preventDefault();

        //grab value of each input
        const food = document.querySelector('#food').value.bold();
        const plNoun = document.querySelector('#plNoun').value.bold();
        const verbObj = document.querySelector('#verbObj').value.bold();
        const plNoun2 = document.querySelector('#plNoun2').value.bold();
        const verbIng = document.querySelector('#verbIng').value.bold();
        const adj = document.querySelector('#adj').value.bold();
        const noun = document.querySelector('#noun').value.bold();
        const activity = document.querySelector('#activity').value.bold();

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
            if (activity == "partying") {
                document.getElementById('partying').className = 'showing'; //partying img appears
            } else if (activity == "modeling") {
                document.getElementById('modeling').className = 'showing'; //modeling img appears
            } else if (activity == "exercising") {
                document.getElementById('exercising').className = 'showing'; //exercising img appears
            }
            myText = `Today is a great day! I started by having ${food} for breakfast. Later, I rolled around in some dirty ${plNoun}. Although I wanted to ${verbObj} my human, I couldn't find them anywhere around the house. This means I can do anything I want! I had been eyeing the ${plNoun2} in the living room, but wasn't allowed to touch them. After ${verbIng} them, I played with my favorite ${adj} ${noun}. I finished the day off by ${activity} with my friends.`;
        }

        

        madLib.innerHTML = myText;

        document.getElementById('input').className = 'hidden'; //input disappears
        document.getElementById('output').className = 'showing'; //output appears

        document.getElementById('zzz').className = 'hidden'; //zzz disappears
        document.getElementById('bubble').className = 'showing'; //dream bubble appears
        

    })
}())