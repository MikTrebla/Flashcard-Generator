var BasicCard = require('./basiccard.js');
var ClozeCard = require('./clozecard.js')
var inquire = require('inquirer');


inquire.prompt([
    {
        type: 'list',
        name: 'choice',
        message: 'Would you like to view basic flashcards or clozecards?',
        choices : ['Basic', 'Cloze']
    }
])
.then(function(results) {
    console.log(results.choice);
    if (results.choice === 'Basic') {
        //start basic game
        // BasicCard.flashCards();
    }
    else if (results.choice === 'Cloze') {
        //start Cloze game
        // ClozeCard.clozeCards();
    };
})