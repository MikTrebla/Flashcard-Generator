// module.exports = ClozeCard;
var inquire = require('inquirer');
// var basicCard = require('./basiccard.js');

function ClozeCard(text, cloze) {
    this.fullText = text;
    this.cloze = cloze;
    this.partial = this.fullText.replace(this.cloze, '...');
};

module.exports = ClozeCard;

//try to use string.replace('string i want to replace', 'string I want to insert');


// module.exports = clozeCards();