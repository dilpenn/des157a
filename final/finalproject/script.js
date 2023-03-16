(function() {
    'use strict';
    console.log('reading js');

    const myForm = document.querySelector('#input');
    const madLib = document.querySelector('#madlib-text');

    
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

        
        //insert image in dream bubble according to activity chosen
        if (activity == "partying") {
            document.getElementById('partying').className = 'showing'; //partying img appears
            document.getElementById('party-bg').className = 'showing'; //party lights background appears
        } else if (activity == "modeling") {
            document.getElementById('modeling').className = 'showing'; //modeling img appears
        } else if (activity == "exercising") {
            document.getElementById('exercising').className = 'showing'; //exercising img appears
        }
        
        // display output text
        let myText;
        myText = `Today is a great day! I started by having <b>${food}</b> for breakfast. Later, I rolled around in some dirty <b>${plNoun}</b>. Although I wanted to <b>${verbObj}</b> my human, I couldn't find them anywhere around the house. This means I can do anything I want! I had been eyeing the <b>${plNoun2}</b> in the living room, but wasn't allowed to touch them. After <b>${verbIng}</b> them, I played with my favorite <b>${adj} ${noun}</b>. I finished the day off by <b>${activity}</b> with my friends.`;

        
        madLib.innerHTML += myText;

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

        // go back to form when click close button
        document.getElementById('close').addEventListener('click', function() {
            location.reload();
        })
    })


}())