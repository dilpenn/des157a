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
            console.log('no food')
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

            //insert image in dream bubble according to activity chosen
            if (activity == "partying") {
                document.getElementById('partying').className = 'showing'; //partying img appears
            } else if (activity == "modeling") {
                document.getElementById('modeling').className = 'showing'; //modeling img appears
            } else if (activity == "exercising") {
                document.getElementById('exercising').className = 'showing'; //exercising img appears
            }
            myText = `Today is a great day! I started by having <b>${food}</b> for breakfast. Later, I rolled around in some dirty <b>${plNoun}</b>. Although I wanted to <b>${verbObj}</b> my human, I couldn't find them anywhere around the house. This means I can do anything I want! I had been eyeing the <b>${plNoun2}</b> in the living room, but wasn't allowed to touch them. After <b>${verbIng}</b> them, I played with my favorite <b>${adj} ${noun}</b>. I finished the day off by <b>${activity}</b> with my friends.`;
        }

        
        madLib.innerHTML = myText;

        document.querySelector('#food').value = '';
        document.querySelector('#plNoun').value = '';
        document.querySelector('#verbObj').value = '';
        document.querySelector('#plNoun2').value = '';
        document.querySelector('#verbIng').value = '';
        document.querySelector('#adj').value = '';
        document.querySelector('#noun').value = '';
        document.querySelector('#activity').value = '';


        document.getElementById('input').className = 'hidden'; //input disappears
        document.getElementById('output').className = 'showing'; //output appears

        document.getElementById('zzz').className = 'hidden'; //zzz disappears
        document.getElementById('bubble').className = 'showing'; //dream bubble appears
        

    })
}())