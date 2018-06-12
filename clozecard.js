// module.exports = ClozeCard;
var inquirer = require('inquirer');
// var basicCard = require('./basiccard.js');

function ClozeCard(text, cloze, partial) {
    this.fullText = text;
    this.cloze = cloze ;
    this.partial = partial;
}


var firstPresidentCloze = new ClozeCard(
    'George Washington was the first president of the United States.',
    'George Washington',
    '...was the first president of the United States.'
    
);

inquirer.prompt([{
    name : 'firstPresident',
    message : firstPresidentCloze.partial,
    type: 'list',
    choices : ['Thomas Jefferson', 'George Washington', 'Abraham Lincoln']
}])
.then(function(results){
    if (results.firstPresident === 'George Washington'){
        console.log('You got it right');
        // console.log(firstPresidentCloze.text);
    } else {
        console.log('You got it wrong');
    }
})